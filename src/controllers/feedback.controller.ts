import { Request, Response } from "express";
import feedbackService from "../services/feedback.service";

const createFeedback = async (req: Request, res: Response): Promise<any> => {
  try {
    const { type, comment, screenshotUrl } = req.body;

    if (!type || !comment || !screenshotUrl) {
      return res.status(422).json({
        message:
          "The 'type', 'comment' and 'screenshotUrl' parameters are mandatory",
      });
    }

    const feedback = await feedbackService.createFeedback(
      type,
      comment,
      screenshotUrl
    );

    return res.status(201).json({ feedback });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};

const getFeedbackList = async (req: Request, res: Response): Promise<any> => {
  try {
    const feedbackList = await feedbackService.getFeedbackList();

    return res.status(201).json({ feedbackList });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};

export default {
  createFeedback,
  getFeedbackList,
};
