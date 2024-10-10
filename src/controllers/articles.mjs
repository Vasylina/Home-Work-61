const getArticlesHandler = (req, res) => {
  res.send("GET Responce for Express for the articles route");
};

const postArticlesHandler = (req, res) => {
  res.send("POST Responce for Express for the articles route");
};

const getArticleByIdHandler = (req, res) => {
  const { articleId } = req.params;
  res.send(`GET Responce for Express for the article by id: ${articleId}`);
};

const putArticleByIdHandler = (req, res) => {
  const { articleId } = req.params;
  res.send(`PUT Responce for Express for the article by id: ${articleId}`);
};

const deleteArticleByIdHandler = (req, res) => {
  const { articleId } = req.params;
  res.send(`DELETE Responce for Express for the article by id: ${articleId}`);
};

export {
  getArticlesHandler,
  postArticlesHandler,
  getArticleByIdHandler,
  putArticleByIdHandler,
  deleteArticleByIdHandler,
};
