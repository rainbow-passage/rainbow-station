import { LeadCreationAttributes } from "~/interfaces";
import { Lead } from "~/models/Leads.model";}

export const getLeads = async (params: any): Promise<Lead[]> => {
  return await Lead.findAll(params);
};

export const getLeadById = async (id: number): Promise<Lead | null> => {
  return await Lead.findByPk(id);
};

export const createLead = async (data: LeadCreationAttributes): Promise<Lead> => {
  return await Lead.create(data);
};

export const updateLead = async (id: number, data: Partial<Lead>): Promise<[number, Lead[]]> => {
  return await Lead.update(data, {
    where: { id },
    returning: true,
  });
};

export const deleteLead = async (id: number): Promise<number> => {
  return await Lead.destroy({
    where: { id },
  });
}; Lead