import { Feedback } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createFeedback = async (
  type: string,
  comment: string,
  screenshotUrl: string
): Promise<Feedback> => {
  return prisma.feedback.create({
    data: {
      type,
      comment,
      screenshotUrl,
    },
  });
};

const getFeedbackList = async (): Promise<Feedback[]> => {
  return prisma.feedback.findMany({});
};

export default {
  createFeedback,
  getFeedbackList,
};
