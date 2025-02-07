import cors from "cors";
import express, { Application, Request, Response } from "express";
import { feedbackRouter } from "./routes/feedback.route";
import { companyRouter } from "./routes/company.route";
import { setupSwagger } from "./swagger";

const app: Application = express();
const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

setupSwagger(app);

app.get("/", (_req: Request, res: Response) => {
  res.json({
    message: "API is on!",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

app.use("/api", feedbackRouter);
app.use("/api", companyRouter);

export default app;
