"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodos = void 0;
const Todo_1 = require("../models/Todo");
const TODOS = [];
const createTodos = (req, resp, next) => {
    const text = req.body.text;
    const newTodo = new Todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    resp
        .status(201)
        .json({ message: "Created the todo", status: 200, data: newTodo });
};
exports.createTodos = createTodos;
//# sourceMappingURL=todos.js.map