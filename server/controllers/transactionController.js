import TransactionModel from "../models/Transaction.js";
import {
  allFieldsAreRequiredError,
  createError,
} from "../utils/customErrors.js";

export const getTransactions = async (req, res, next) => {
  const { ...others } = req.query;
  const transactions = await TransactionModel.find({
    ...others,
  }).limit(req.query.limit);

  if (!transactions.length) {
    return res.status(404).json({ message: "No transactions found" });
  }

  res.status(200).json(transactions);
  // try {

  //   res.status(200).json(transactions);
  // } catch (error) {
  //   next(error);
  // }
};

export const createTransaction = async (req, res, next) => {
  const { customer, customerEmail, propertyName, propertyPhoto, valuePayed } =
    req.body;

  if (
    !customer ||
    !customerEmail ||
    !propertyName ||
    !propertyPhoto ||
    !valuePayed
  ) {
    return next(allFieldsAreRequiredError());
  }

  try {
    const transaction = await TransactionModel.create({
      customer,
      customerEmail,
      propertyName,
      propertyPhoto,
      valuePayed,
      transactionDay: new Date().getDate(),
      transactionMonth: new Date().toLocaleString("en-US", { month: "long" }),
    });

    if (!transaction) {
      return next(createError(500, "Something went wrong"));
    }

    return res.status(200).json({ message: "Transaction made successfully" });
  } catch (error) {
    next(error);
  }
};
