import { pool } from "../config/db";
import request from "supertest";
import app from "../app";

//dotenv.config();

describe("GET /api/tasks", () => {
  it("should return a list of tasks", async () => {
    const res = await request(app).get("/api/tasks");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});

afterAll(() => {
  pool.end();
});
