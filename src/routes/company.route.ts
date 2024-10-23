import express from "express";
import companyController from "../controllers/company.controller";

export const companyRouter = express.Router();

companyRouter.post("/company/new", companyController.createCompany);
