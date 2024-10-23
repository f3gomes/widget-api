import express from "express";
import feedbackController from "../controllers/feedback.controller";

export const feedbackRouter = express.Router();

feedbackRouter.post("/feedback/new", feedbackController.createFeedback);
feedbackRouter.get(
  "/feedback/:companyId",
  feedbackController.getFeedbackListByCompanyId
);
