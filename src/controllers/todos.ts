import { RequestHandler } from "express";
import { Todo } from "../models/Todo";

const TODOS = [];

export const createTodos: RequestHandler = (req, resp, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);
  resp
    .status(201)
    .json({ message: "Created the todo", status: 200, data: newTodo });
};
