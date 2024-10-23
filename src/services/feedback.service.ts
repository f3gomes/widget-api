import { Feedback, FeedbackType } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createFeedback = async (
  type: FeedbackType,
  comment: string,
  companyId: string,
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

const getFeedbackListByCompanyId = async (
  companyId: string
): Promise<Object> => {
  const feedbacks = await prisma.feedback.findMany({ where: { companyId } });
  const company = await prisma.company.findUnique({
    where: { id: companyId },
    select: {
      name: true,
    },
  });

  const feedbackList = { company, feedbacks };

  return feedbackList;
};

export default {
  createFeedback,
  getFeedbackListByCompanyId,
};
