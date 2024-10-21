import { Request, Response } from "express";
import companyService from "../services/company.service";

const createCompany = async (req: Request, res: Response): Promise<any> => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(422).json({
        message: "The 'name' parameter are mandatory",
      });
    }

    const company = await companyService.createCompany(name);

    return res.status(201).json({ company });
  } catch (error: any) {
    res.status(500).json({ error: error.message.split("\n") });
    console.log(error);
  }
};

const getCompanyList = async (req: Request, res: Response): Promise<any> => {
  try {
    const companyList = await companyService.getCompanyList();

    return res.status(201).json({ companyList });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};

export default {
  createCompany,
  getCompanyList,
};
