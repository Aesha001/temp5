const express = require("express");
const serverless = require("serverless-http");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

let todos = [];

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const todo = req.body;
  todos.push(todo);
  res.status(201).json(todo);
});

app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  todos = todos.filter((todo) => todo.id !== id);
  res.status(204).send();
});

module.exports.handler = serverless(app);
