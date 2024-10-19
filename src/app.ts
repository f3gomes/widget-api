import cors from "cors";
import express, { Application, Request, Response } from "express";
import { connectToDB } from "./config/database";

export const app: Application = express();
const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

connectToDB();

app.get("/", (_req: Request, res: Response) => {
  res.json({
    message: "API is on!",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
