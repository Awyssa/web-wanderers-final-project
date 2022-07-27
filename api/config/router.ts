const { Router }= require("express");
const weeksRouter = require( "../controllers/weekController");
const jobRouter = require( "../controllers/jobController");
const userRouter = require( "../controllers/userController");

const router = Router();

router.get("/", (req, res) =>
{
	res.status(200).json("API is alive!!!");
});

router.use("/week", weeksRouter);
router.use("/job", jobRouter);
router.use("/user", userRouter);

export { router };
