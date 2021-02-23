"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = require("body-parser");
const dotenv_1 = __importDefault(require("dotenv"));
const todos_1 = __importDefault(require("./routes/todos"));
const server_1 = __importDefault(require("./server"));
dotenv_1.default.config();
const server = new server_1.default(process.env.PORT);
const app = server.app;
app.use(body_parser_1.json());
app.use("/todos", todos_1.default);
app.use((err, req, resp, next) => {
    resp.status(500).json({ message: err.message });
});
server.start();
//# sourceMappingURL=index.js.map