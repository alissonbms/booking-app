import jwt from "jsonwebtoken";

//Utilities
import { createError } from "./customErrors.js";

export const verifyUser = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (error, user) => {
    if (error) return next(createError(403, "Token is not valid!"));
    req.user = user;
  });

  if (req.user.id === req.params.id || req.user.isAdmin) {
    next();
  } else {
    return next(createError(403, "You are not authorized"));
  }
};

export const verifyAdmin = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (error, user) => {
    if (error) return next(createError(403, "Token is not valid!"));
    req.user = user;
  });

  if (req.user.isAdmin) {
    next();
  } else {
    return next(createError(403, "You are not authorized"));
  }
};
