import express from "express";
import userRouter from "./userRouter.js";

const apiRouter = express.Router();
apiRouter.use("/v1/api", userRouter);

export default apiRouter;
