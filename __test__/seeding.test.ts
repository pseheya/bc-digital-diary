import db from "../db/connection";
import seed from "../db/seeds/seed";
import {
  dayData,
  notesData,
  userData,
  toDoData,
} from "../db/data/test-data/indexTest";

beforeAll(async () => {
  await seed({ userData, notesData, toDoData, dayData });
});

afterAll(async () => {
  await db.query("DROP TABLE IF EXISTS to_do, notes, days, users CASCADE;");
  await db.end();
});

describe("Database Seeding", () => {
  test("Users table should contain seeded users", async () => {
    const result = await db.query("SELECT * FROM users;");
    expect(result.rows.length).toBe(userData.length);
    expect(result.rows[0]).toHaveProperty("username", userData[0].username);
  });

  test("Days table should contain all days of the week", async () => {
    const result = await db.query("SELECT * FROM days;");
    expect(result.rows.length).toBe(dayData.length);
    expect(result.rows.some((row) => row.day === "Monday")).toBe(true);
  });

  test("Notes table should contain inserted notes", async () => {
    const result = await db.query("SELECT * FROM notes;");
    expect(result.rows.length).toBe(notesData.length);
    expect(result.rows[0]).toHaveProperty("content", notesData[0].content);
  });

  test("To-Do table should contain tasks", async () => {
    const result = await db.query("SELECT * FROM to_do;");
    expect(result.rows.length).toBe(toDoData.length);
    expect(result.rows[0]).toHaveProperty("task", toDoData[0].task);
  });

  test("To-Do table should have completed as boolean", async () => {
    const result = await db.query("SELECT completed FROM to_do;");
    expect(typeof result.rows[0].completed).toBe("boolean");
  });
});
