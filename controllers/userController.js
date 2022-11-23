import UserModel from "../models/User.js";
import { Types } from "mongoose";
import {
  notFoundOrInvalidDataError,
  idIsRequiredError,
  missingEntityRegistersError,
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
