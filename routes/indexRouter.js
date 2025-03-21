// routes/indexRouter.js
import { Router } from "express";

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", link:"/new", messages: messages});
});

indexRouter.get("/new", (req, res) => {
  res.render("form");
})

indexRouter.post("/new", (req, res) => {
  messages.push({ text: req.body.messageText, user: req.body.messageUser, added: new Date() });
  res.redirect("/");
})

export default indexRouter;