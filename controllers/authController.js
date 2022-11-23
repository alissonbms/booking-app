import UserModel from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import {
  allFieldsAreRequiredError,
  couldNotCreateError,
  createError,
  notFoundOrInvalidDataError,
} from "../utils/customErrors.js";

export const register = async (req, res, next) => {
  const { username, password, email, isAdmin } = req.body;

  if (!username || !email || !password) {
    return next(allFieldsAreRequiredError());
  }

  const existingEmail = await UserModel.findOne({ email });

  if (existingEmail) {
    return next(createError(409, "Email already in use. You cannot use it"));
  }

  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const newUser = await UserModel.create({
      username,
      email,
      isAdmin,
      password: hashedPassword,
    });

    if (!newUser) {
      return next(couldNotCreateError("user"));
    }

    res
      .status(201)
      .json(
        `User ${newUser.username} owner of ${newUser.email} email was created`
      );
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    return next(allFieldsAreRequiredError());
  }

  try {
    const user = await UserModel.findOne({ email: email });

    if (!user) {
      return next(notFoundOrInvalidDataError("user"));
    }

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect || user.username !== username) {
      return next(createError(400, "Wrong data"));
    }

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET_KEY
    );
    // { subject: user._id.toString(), expiresIn: "2d" }

    const { password, isAdmin, ...otherDetails } = user._doc;

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ ...otherDetails });
  } catch (error) {
    next(error);
  }
};
