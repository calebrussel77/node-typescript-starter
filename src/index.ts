import { json } from "body-parser";
import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";

import todoRoutes from "./routes/todos";
import Server from "./server";

dotenv.config();

const server = new Server(process.env.PORT!);
const app = server.app;

app.use(json());
app.use("/todos", todoRoutes);

app.use((err: Error, req: Request, resp: Response, next: NextFunction) => {
  resp.status(500).json({ message: err.message });
});

server.start();
