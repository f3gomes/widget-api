import { Feedback, FeedbackType } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createFeedback = async (
  type: FeedbackType,
  comment: string,
  companyId: number,
  screenshotUrl: string
): Promise<Feedback | { error: string }> => {
  const company = prisma.company.findUnique({ where: { id: companyId } });

  if (!company) {
    return { error: "Company not found" };
  }

  return prisma.feedback.create({
    data: {
      companyId,
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
