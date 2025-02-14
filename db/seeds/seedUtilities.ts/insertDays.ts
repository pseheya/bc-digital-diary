import db from "../../connection";
import format from "pg-format";
import { Days } from "../../../element/(days)/daysUtilities/daysType";

const insertDays = async (dayData: Days[]) => {
  if (dayData.length === 0) return;

  const dayValues = dayData.map(({ day }) => [day]);

  const insertDaysQuery = format(
    "INSERT INTO days (day) VALUES %L ON CONFLICT (day) DO NOTHING RETURNING *;",
    dayValues
  );

  await db.query(insertDaysQuery);
};

export default insertDays;
