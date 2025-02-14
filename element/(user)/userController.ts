export const authorizedUser = (req, res, next) => {
  if (req.session.authorized) {
    next();
  } else {
    res.status(403).json({ msg: "You're not authorized to view this page" });
  }
};
