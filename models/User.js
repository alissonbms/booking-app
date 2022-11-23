import { model, Schema } from "mongoose";

const UserModel = model(
  "User",
  new Schema(
    {
      username: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      isAdmin: { type: Boolean, default: false },
    },
    { timestamps: true }
  )
);

export default UserModel;
