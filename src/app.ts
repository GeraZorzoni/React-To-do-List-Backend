import express from "express";
import cors from "cors";
import taskRoutes from "./routes/tasks-routes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: "*",
  })
);

app.use("/api/tasks", taskRoutes);

app.use(errorHandler);

export default app;
