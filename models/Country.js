import { model, Schema } from "mongoose";

const CountryModel = model(
  "Country",
  new Schema({
    name: { type: String, required: true },
    flagPath: { type: String, required: true },
    properties: {
      type: [Schema.Types.ObjectId],
      ref: "Property",
      required: true,
    },
  })
);
