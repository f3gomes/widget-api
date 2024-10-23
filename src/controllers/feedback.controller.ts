import { Request, Response } from "express";
import feedbackService from "../services/feedback.service";
import { Feedback } from "@prisma/client";

const createFeedback = async (
  req: Request,
  res: Response
): Promise<Feedback | any> => {
  try {
    const { type, comment, companyId, screenshotUrl } = req.body;

    if (!type || !comment || !companyId) {
      return res.status(422).json({
        message:
          "The 'type', 'comment' and 'companyId' parameters are mandatory",
      });
    }

    const feedback = await feedbackService.createFeedback(
      type,
      comment,
      companyId,
      screenshotUrl
    );

    return res.status(201).json({ feedback });
  } catch (error: any) {
    res.status(500).json({ error: error.message.split("\n") });
    console.log(error);
  }
};

const getFeedbackListByCompanyId = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { companyId } = req.params;

  try {
    const feedbackList = await feedbackService.getFeedbackListByCompanyId(
      companyId
    );

    return res.status(200).json({ feedbackList });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};

export default {
  createFeedback,
  getFeedbackListByCompanyId,
};
