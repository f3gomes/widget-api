import { Request, Response } from "express";
import Company from "../services/company.service";

const createCompany = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const company = await Company.createCompany(name);

    res.status(201).json({ company });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};

const getCompanyByNAme = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const company = await Company.getCompanyByName(name);

    if (!company || !name) {
      res.status(404).json({ message: "Company not found" });
    } else {
      res.status(200).json({ company });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};

export default {
  createCompany,
  getCompanyByNAme,
};
