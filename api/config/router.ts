const express = require("express");
const router = express.Router();
import weeksRouter from "../controllers/weekController";
import jobRouter from "../controllers/jobController";
import userRouter from "../controllers/userController";


router.get("/", (_req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: string): void; new(): any; }; }; }) => {
  res.status(200).json("API is alive!!!");
});

router.use("/week", weeksRouter);
router.use("/job", jobRouter);
router.use("/user", userRouter);

export { router };
