import { Router, type IRouter } from "express";
import { HelloResponse } from "@workspace/api-zod";

const router: IRouter = Router();

router.get("/hello", (_req, res) => {
  const data = HelloResponse.parse({
    message: "Hello from your Node.js API!",
  });
  res.json(data);
});

export default router;
