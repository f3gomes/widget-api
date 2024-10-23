import { Request, Response } from "express";
import companyService from "../services/company.service";
import { Company } from "@prisma/client";

const createCompany = async (
  req: Request,
  res: Response
): Promise<Company | any> => {
  try {
    const { name, cnpj, address, phone, email } = req.body;

    if (!name || !cnpj || !address || !phone || !email) {
      return res.status(422).json({
        message:
          "The 'name', 'cnpj', 'address', 'phone', 'email' parameters are mandatory",
      });
    }

    const company = await companyService.createCompany(
      name,
      cnpj,
      address,
      phone,
      email
    );

    return res.status(201).json({ company });
  } catch (error: any) {
    res.status(500).json({ error: error.message.split("\n") });
    console.log(error);
  }
};

export default {
  createCompany,
};
