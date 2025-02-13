import dotenv from "dotenv";
dotenv.config({ path: ".env.test" });

import db from "../connection";
import { SeedData } from "../../utilities/types";
import setupTables from "./seedUtilities.ts/setUpTables";
import insertUsers from "./seedUtilities.ts/insertUserData";
import insertDays from "./seedUtilities.ts/insertDays";
import insertNotes from "./seedUtilities.ts/insertNoteTable";
import insertToDo from "./seedUtilities.ts/insertToDo";

const seed = async ({
  userData,
  notesData,
  toDoData,
  dayData,
}: SeedData): Promise<void> => {
  try {
    console.log("Dropping and setting up tables...");
    await db.query("DROP TABLE IF EXISTS to_do, notes, days, users CASCADE;");
    await setupTables();

    console.log("Inserting tables");
    await insertUsers(userData);
    await insertDays(dayData);
    await insertNotes(notesData);
    await insertToDo(toDoData);
  } catch (error) {
    console.error("Error seeding database:", error);
    throw error;
  } finally {
    process.on("exit", () => {
      db.end();
    });
  }
};

export default seed;
