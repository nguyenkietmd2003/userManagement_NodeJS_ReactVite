import express from "express";
import {
  createUser,
  getUser,
  handleLogin,
} from "../controllers/userController.js";
import delay from "../middleware/delay.js";
import auth from "../middleware/auth.js";

const userRouter = express.Router();
userRouter.all("*", auth);
userRouter.get("/", (req, res) => {
  res.send("UserRouter: api from user");
});

userRouter.post("/register", createUser);
userRouter.post("/login", handleLogin);

// get user
userRouter.get("/user", getUser);

export default userRouter;
