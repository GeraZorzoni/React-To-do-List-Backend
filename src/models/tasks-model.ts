import { pool } from "../config/db";

export const getAllTasks = async () => {
  const result = await pool.query("SELECT * FROM tasks ORDER BY id ASC");
  return result.rows;
};

export const createTask = async (title: string, description: string) => {
  const result = await pool.query("INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *", [
    title,
    description,
  ]);
  return result.rows[0];
};

export const updateTask = async (id: number, title: string, description: string) => {
  const result = await pool.query("UPDATE tasks SET title = $1, description = $2 WHERE id = $3 RETURNING *", [
    title,
    description,
    id,
  ]);
  return result.rows[0];
};

export const deleteTask = async (id: number) => {
  await pool.query("DELETE FROM tasks WHERE id = $1", [id]);
};
