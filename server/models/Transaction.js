import { model, Schema } from "mongoose";

const TransactionModel = model(
  "Transaction",
  new Schema({
    customer: { type: String, required: true },
    customerEmail: { type: String, required: true },
    propertyPhoto: { type: String, required: true },
    propertyName: { type: String, required: true },
    valuePayed: { type: String, required: true },
    transactionDate: { type: String, required: true },
  })
);

export default TransactionModel;
