import db from "../../connection";
import format from "pg-format";
import { ToDo } from "../../../utilities/types";

const insertToDo = async (toDoData: ToDo[]) => {
  if (toDoData.length === 0) return;

  const toDoValues = toDoData.map(
    ({ userID, day_id, task, completed, created_at }) => [
      userID,
      day_id,
      task,
      completed,
      created_at,
    ]
  );

  const insertToDoQuery = format(
    "INSERT INTO to_do (userID, day_id, task, completed, created_at) VALUES %L RETURNING *;",
    toDoValues
  );

  await db.query(insertToDoQuery);
};

export default insertToDo;
