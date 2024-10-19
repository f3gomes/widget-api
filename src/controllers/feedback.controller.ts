import { Request, Response } from "express";
import Feedback from "../services/feedback.service";

const createFeedback = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const company = await Feedback.createFeedback(name);

    res.status(201).json({ company });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};

export default {
  createFeedback,
};
