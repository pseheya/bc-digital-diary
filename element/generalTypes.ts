import { UserData } from "./(user)/userUtilities.ts/userTypes";
import { NoteData } from "./(notes)/notesUtils.ts/notesType";
import { ToDo } from "./(toDo)/toDoUtilities/toDoType";
import { Days } from "./(days)/daysUtilities/daysType";

export type SeedData = {
  userData: UserData[];
  notesData: NoteData[];
  toDoData: ToDo[];
  dayData: Days[];
};

export type SeedUserData = [];
