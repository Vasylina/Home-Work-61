const getUsersHandler = (req, res) => {
  res.send("GET Users route");
};

const postUsersHandler = (req, res) => {
  res.send("POST Users route");
};

// Users/:userId
const getUserByIdHandler = (req, res) => {
  console.log(req.params);
  const { userId } = req.params;
  res.send(`GET User bu id route with id ${userId}`);
};

const deleteUserByIdHandler = (req, res) => {
  const { userId } = req.params;
  res.send(`DELETE User bu id route with id ${userId}`);
};

const putUserByIdHandler = (req, res) => {
  const { userId } = req.params;
  res.send(`PUT User bu id route with id ${userId}`);
};

export {
  getUsersHandler,
  postUsersHandler,
  getUserByIdHandler,
  deleteUserByIdHandler,
  putUserByIdHandler,
};
