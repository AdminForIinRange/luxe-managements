"use server";
// forming data model so it's readable and follows a type for mongodb

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 20,
      spical_char: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      maxlength: 50,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export const User = mongoose.models?.User || mongoose.model("User", userSchema);
