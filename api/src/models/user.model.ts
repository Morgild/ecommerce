import { Schema, model } from "mongoose";

const userSchema = new Schema({
  userName: String,
  email: String,
  merchName: String,
  address: { city: String, district: String, khoroo: String },
  experience: String,
  merchType: String,
  password: String,
  createdAt: Date,
  updatedAt: Date,
});
export const UserModel = model("user", userSchema);
