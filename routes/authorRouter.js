// routes/authorRouter.js
import { Router } from "express";
import { getAuthorById } from "../controllers/authorController.js"

const authorRouter = Router();

authorRouter.get("/", (req, res) => res.send("All authors"));
authorRouter.get("/:authorId", (req, res) => {
  const { authorId } = req.params;
  res.send(`Author ID: ${authorId}`);
});
authorRouter.get("/:authorId", getAuthorById);

export default authorRouter;