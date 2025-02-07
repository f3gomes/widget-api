import cors from "cors";
import express, { Application, Request, Response } from "express";
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
  swaggerUi.setup(swaggerSpec, {
    customCssUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css",
    customJs: [
      "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.js",
    ],
  })
);

export default app;
