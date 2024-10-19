import { Request, Response } from "express";
import company from "../services/company.service";

const createCompany = async (req: Request, res: Response) => {
  const { name } = req.body;
  const user = await company.createCompany(name);

  res.status(201).send(user);
};

export default {
  createCompany,
};
