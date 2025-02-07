import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import { feedbackRouter } from "./routes/feedback.route";
import { companyRouter } from "./routes/company.route";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger";
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api", feedbackRouter);
app.use("/api", companyRouter);

app.use(
  "/docs",
  swaggerUi.serve,
  async (_req: Request, res: Response, next: NextFunction) => {
    try {
      res.send(swaggerUi.generateHTML(swaggerSpec));
    } catch (err) {
      next(err);
    }
  }
);

export default app;
