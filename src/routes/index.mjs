import { Router } from "express";
import usersRouter from "./users.mjs";
import articlesRouter from "./articles.mjs";
import rootRouter from "./root.mjs";

const router = Router();

router.use("/", rootRouter);
router.use("/users", usersRouter);
router.use("/articles", articlesRouter);

export default router;
