import db from "../../connection";
import format from "pg-format";
import { NoteData } from "../../../utilities/types";

const insertNotes = async (notesData: NoteData[]) => {
  if (notesData.length === 0) return;

  const noteValues = notesData.map(({ userID, content, created_at }) => [
    userID,
    content,
    created_at,
  ]);

  const insertNotesQuery = format(
    "INSERT INTO notes (userID, content, created_at) VALUES %L RETURNING *;",
    noteValues
  );

  await db.query(insertNotesQuery);
};

export default insertNotes;
