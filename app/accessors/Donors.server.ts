import { Donor } from "~/models/Donors.model";}

export const getDonors = async (params: any): Promise<Donor[]> => {
  return await Donor.findAll(params);
};

export const getDonorById = async (id: number): Promise<Donor | null> => {
  return await Donor.findByPk(id);
};

export const createDonor = async (data: Donor): Promise<Donor> => {
  return await Donor.create(data);
};

export const updateDonor = async (id: number, data: Partial<Donor>): Promise<[number, Donor[]]> => {
  return await Donor.update(data, {
    where: { id },
    returning: true,
  });
};

export const deleteDonor = async (id: number): Promise<number> => {
  return await Donor.destroy({
    where: { id },
  });
};