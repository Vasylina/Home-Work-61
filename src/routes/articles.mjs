import { Router } from "express";
import {
  getArticleByIdHandler,
  getArticlesHandler,
  postArticlesHandler,
  putArticleByIdHandler,
  deleteArticleByIdHandler,
} from "../controllers/articles.mjs";

const articlesRouter = Router();

articlesRouter.route("/").get(getArticlesHandler).post(postArticlesHandler);

articlesRouter
  .route("/:articleId")
  .get(getArticleByIdHandler)
  .put(deleteArticleByIdHandler)
  .delete(putArticleByIdHandler);

export default articlesRouter;
