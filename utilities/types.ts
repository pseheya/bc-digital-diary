export type SeedUserData = [];

export type UserData = {
  username: string;
  name: string;
  email: string;
  password: string;
};

export type NoteData = {
  userID: number;
  content: string;
  created_at: string;
};

export type ToDo = {
  userID: number;
  day_id: number;
  task: string;
  completed: boolean;
  created_at: string;
};

export type Days = {
  day:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
};

export type SeedData = {
  userData: UserData[];
  notesData: NoteData[];
  toDoData: ToDo[];
  dayData: Days[];
};
