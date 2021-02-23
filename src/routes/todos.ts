import { Router } from "express";
import { createTodos } from "../controllers/todos";

const router = Router();

router.post("/", createTodos);

router.get("/");

router.patch("/:id");

router.delete("/:id");

export default router;
