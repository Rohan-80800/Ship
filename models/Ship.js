import mongoose from "mongoose";

const shipSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    }
  },
  { timestamps: true }
);

const Ship = mongoose.model("Ship", shipSchema);
export default Ship;
