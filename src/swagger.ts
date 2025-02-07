import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Application } from "express";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Widget API",
      version: "1.0.0",
      description: "Documentação da API usando Swagger",
    },
    servers: [
      {
        url: "http://localhost:9000",
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
};

const swaggerSpec = swaggerJsdoc(options);

export function setupSwagger(app: Application) {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
