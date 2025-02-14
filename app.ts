import express from "express";
import session from "express-session";
import cors from "cors";
import { randomSessionSecret } from "./utilities/random-session-key";
import { authorizedUser } from "./element/(user)/userController";
import { checkAuthorisedUser } from "./element/(user)/userRoute";

const app = express();
const sessionSecret = process.env.SESSION_SECRET || randomSessionSecret();
const store = new session.MemoryStore();

app.use(express.json());

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

app.get("/protected", authorizedUser, checkAuthorisedUser);

export default app;
