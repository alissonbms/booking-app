import { model, Schema } from "mongoose";

const RoomModel = model(
  "Room",
  new Schema(
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      maxPeople: {
        type: Number,
        required: true,
        min: 1,
      },
      price: {
        type: Number,
        required: true,
      },
      roomNumbers: {
        type: [
          {
            number: { type: Number, required: true },
            unvailableDates: { type: [Date] },
          },
        ],
        required: true,
      },
    },
    { timestamps: true }
  )
);
