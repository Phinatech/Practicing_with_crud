import mongoose from "mongoose";
import { user } from "../interface/Allinterface";

interface userData extends user, mongoose.Document {}

const userSchema = new mongoose.Schema<user>(
  {
    userName: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
    },
    verified: {
      type: Boolean,
    },
    books: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bookcollection",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model<userData>("usercollection", userSchema);

export default userModel;

// yo
