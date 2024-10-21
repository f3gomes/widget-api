/*
  Warnings:

  - Changed the type of `type` on the `Feedback` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "FeedbackType" AS ENUM ('BUG', 'IDEA', 'OTHER');

-- AlterTable
ALTER TABLE "Feedback" DROP COLUMN "type",
ADD COLUMN     "type" "FeedbackType" NOT NULL;
