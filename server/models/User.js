import { model, Schema } from "mongoose";

const UserModel = model(
  "User",
  new Schema(
    {
      username: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      photo: {
        type: String,
        default:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      },
      country: { type: String, required: true },
      city: { type: String, required: true },
      phone: { type: String, required: true },
      password: { type: String, required: true },
      isAdmin: { type: Boolean, default: false },
    },
    { timestamps: true }
  )
);

export default UserModel;
