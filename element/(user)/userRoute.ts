import app from "../../app";
import { authorizedUser } from "./userController";
import session from "express-session";

interface CustomSession extends session.Session {
  user?: { id: string; username: string; email: string };
}

export const checkAuthorisedUser = (req, res) => {
  const session = req.session as CustomSession;
  res.render("protected", { user: session.user });
};
