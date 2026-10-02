import { Router, type IRouter } from "express";
import healthRouter from "./health";
import helloRouter from "./hello";

const router: IRouter = Router();

router.use(healthRouter);
router.use(helloRouter);

export default router;
