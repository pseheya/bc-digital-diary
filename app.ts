import express from "express";
import session from "express-session";
import cors from "cors";
import { randomSessionSecret } from "./utilities/random-session-key";

const app = express();
const sessionSecret = process.env.SESSION_SECRET || randomSessionSecret();
const store = new session.MemoryStore();

app.use(
  session({
    secret: sessionSecret,
    cookie: { maxAge: 1000 * 60 * 60 * 24, secure: true, sameSite: "none" },
    resave: false,
    saveUninitialized: false,
    store,
  })
);
app.use(cors());

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
