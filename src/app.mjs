import express from "express";
// import router from "./routes/index.mjs";
// import { errors } from "celebrate";

const PORT = 3000;
const app = express();

// app.use(express.json());
// app.use(router);
// app.use(errors());

app.use((err, req, res, next) => {
  if (!res.headersSent) {
    res.status(err.status || 500).json({
      status: "error",
      message: err.message || "Internal server error",
    });
  }
});

app.set("view engine", "pug");
app.set("views", "./src/views");

app.get("/", (req, res) => {
  const items = [
    { name: "Apple", price: 1.99 },
    { name: "Banana", price: 0.99 },
    { name: "Cherry", price: 2.99 },
    { name: "Date", price: 3.99 },
    { name: "Elderberry", price: 4.99 },
    { name: "Fig", price: 5.99 },
  ];
  const user = { name: "John", age: 30 };
  const title = "Fruits";

  res.render("index", { items, user, title });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
