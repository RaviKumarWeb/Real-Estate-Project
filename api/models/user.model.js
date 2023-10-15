import exp from "constants";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true, // Ensure uniqueness of usernames
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://tse4.explicit.bing.net/th?id=OIP.F7AAZ51YNslUUrejRKkDeQHaE1&pid=Api&P=0&h=180",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
