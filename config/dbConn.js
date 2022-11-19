import mongoose from "mongoose";

const dbConn = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (err) {
    //To handle initial connection errors
    console.log(err.message);
  }
};
export default dbConn;
