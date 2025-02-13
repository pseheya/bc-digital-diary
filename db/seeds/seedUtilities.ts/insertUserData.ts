import db from "../../connection";
import format from "pg-format";
import { UserData } from "../../../utilities/types";

const insertUsers = async (userData: UserData[]) => {
  if (userData.length === 0) return;

  const userValues = userData.map(({ username, name, email, password }) => [
    username,
    name,
    email,
    password,
  ]);

  const queryStr = format(
    `INSERT INTO users (username, name, email, password) 
     VALUES %L 
     ON CONFLICT (username) DO NOTHING;`,
    userValues
  );

  await db.query(queryStr);
};

export default insertUsers;
