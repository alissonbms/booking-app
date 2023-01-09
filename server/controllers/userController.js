import { Types } from "mongoose";
import jwt from "jsonwebtoken";

//Utilities
import UserModel from "../models/User.js";
import {
  notFoundOrInvalidDataError,
  idIsRequiredError,
  missingEntityRegistersError,
  createError,
} from "../utils/customErrors.js";

export const getUsers = async (req, res, next) => {
  try {
    const users = await UserModel.find().select("-password");

    if (!users.length) {
      return next(missingEntityRegistersError("users"));
    }

    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res, next) => {
  const id = req.params.id;

  if (!Types.ObjectId.isValid(id)) {
    return next(idIsRequiredError("user"));
  }

  try {
    const user = await UserModel.findById(id);
    if (!user) {
      return next(notFoundOrInvalidDataError("user"));
    }

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  const id = req.params.id;

  if (!Types.ObjectId.isValid(id)) {
    return next(idIsRequiredError("user"));
  }

  const notAllowedUpdates = ["email"];
  const requestedUpdates = Object.keys(req.body);

  for (const update of requestedUpdates) {
    if (notAllowedUpdates.includes(update))
      return next(createError(400, "You can not update email!"));
  }

  const isAdmin = req.body.isAdmin;

  if (isAdmin) {
    const token = req.cookies.access_token;

    jwt.verify(token, process.env.JWT_SECRET_KEY, (error, user) => {
      if (error) return next(createError(403, "Token is not valid!"));
      req.user = user;
    });

    if (req.user.isAdmin) {
      try {
        const updatedUser = await UserModel.findByIdAndUpdate(
          id,
          { $set: req.body },
          { new: true }
        );

        if (!updatedUser) {
          return next(notFoundOrInvalidDataError("user"));
        }

        res.status(200).json(updatedUser);
      } catch (error) {
        next(error);
      }
    } else {
      return next(createError(403, "You are not authorized"));
    }
  } else {
    try {
      const updatedUser = await UserModel.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true }
      );

      if (!updatedUser) {
        return next(notFoundOrInvalidDataError("user"));
      }

      res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  }
};

export const deleteUser = async (req, res, next) => {
  const id = req.params.id;

  if (!Types.ObjectId.isValid(id)) {
    return next(idIsRequiredError("user"));
  }

  try {
    const deletedUser = await UserModel.findByIdAndDelete(id);

    if (!deletedUser) {
      return next(notFoundOrInvalidDataError("user"));
    }

    res.status(200).json(`User: ${deletedUser.email}, has been deleted`);
  } catch (error) {
    next(error);
  }
};
