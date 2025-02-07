import express from "express";
import feedbackController from "../controllers/feedback.controller";

export const feedbackRouter = express.Router();

/**
 * @swagger
 * /api/feedback/new:
 *   post:
 *     summary: Cadastrar Feedback
 *     description: Cadastra um novo feedback no banco de dados.
 *     tags:
 *       - feedback
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *                 example: "BUG"
 *               comment:
 *                 type: string
 *                 example: "Novo bug encontrado"
 *               screenshotUrl:
 *                 type: string
 *                 example: "https://ik.imagekit.io/demo/test-image.jpg"
 *               companyId:
 *                 type: string
 *                 example: "330e8400-e29b-41d4-a716-446655440012"
 *     responses:
 *       200:
 *         description: Feedback cadastrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "550e8400-e29b-41d4-a716-446655440000"
 *                 type:
 *                   type: string
 *                   example: "BUG"
 *                 comment:
 *                   type: string
 *                   example: "Novo bug encontrado"
 *                 screenshotUrl:
 *                   type: string
 *                   example: "https://ik.imagekit.io/demo/test-image.jpg"
 *                 companyId:
 *                   type: string
 *                   example: "330e8400-e29b-41d4-a716-446655440012"
 */
feedbackRouter.post("/feedback/new", feedbackController.createFeedback);
feedbackRouter.get(
  "/feedback/:companyId",
  feedbackController.getFeedbackListByCompanyId
);
