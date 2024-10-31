import cors from "cors";
import express, { Application, Request, Response } from "express";
import { feedbackRouter } from "./routes/feedback.route";
import { companyRouter } from "./routes/company.route";
import path from "path";

const app: Application = express();
const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.json({
    message: "API is on!",
  });
});

app.get("/docs", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "./docs/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api", feedbackRouter);
app.use("/api", companyRouter);

export default app;
