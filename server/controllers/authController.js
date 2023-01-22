import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Utilities
import UserModel from "../models/User.js";
import TransactionModel from "../models/Transaction.js";
import {
  allFieldsAreRequiredError,
  couldNotCreateError,
  createError,
  notFoundOrInvalidDataError,
} from "../utils/customErrors.js";

export const register = async (req, res, next) => {
  const { username, password, email, country, city, phone, photo } = req.body;

  if (!username || !email || !password || !country || !city || !phone) {
    return next(allFieldsAreRequiredError());
  }

  const existingEmail = await UserModel.findOne({ email });
  const emailWithTransaction = await TransactionModel.findOne({
    customerEmail: email,
  });
  if (existingEmail || emailWithTransaction) {
    return next(createError(409, "You cannot use this email, change it"));
  }

  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const newUser = await UserModel.create({
      username,
      email,
      photo,
      country,
      city,
      phone,
      isAdmin: false,
      password: hashedPassword,
    });

    if (!newUser) {
      return next(couldNotCreateError("user"));
    }

    res.status(201).json({ username, email });
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
      process.env.JWT_SECRET_KEY,
      { expiresIn: "8h" }
    );

    const { password, isAdmin, ...otherDetails } = user._doc;

    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
        sameSite: "None",
        secure: true,
        maxAge: 28800000,
      })
      .json({ success: true, token, details: { ...otherDetails }, isAdmin });
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res, next) => {
  res.clearCookie("access_token");
  res.status(200).json({
    success: true,
    message: "Logged out",
  });
};
