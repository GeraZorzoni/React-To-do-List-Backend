import { Request, Response } from "express";
import * as taskModel from "../models/tasks-model";

export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await taskModel.getAllTasks();
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

export const createTask = async (req: Request, res: Response) => {
  const { title, description } = req.body;
  try {
    const task = await taskModel.createTask(title, description);
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const task = await taskModel.updateTask(Number(id), title, description);
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await taskModel.deleteTask(Number(id));
    res.json({ message: "Task deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};
