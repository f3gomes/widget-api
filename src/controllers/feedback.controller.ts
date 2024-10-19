import { Request, Response } from "express";
import Feedback from "../services/feedback.service";

const createFeedback = async (req: Request, res: Response) => {
  try {
    const { type, comment, screenshotUrl } = req.body;
    const feedback = await Feedback.createFeedback(
      type,
      comment,
      screenshotUrl
    );

    res.status(201).json({ feedback });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};

export default {
  createFeedback,
};
