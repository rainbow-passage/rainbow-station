import { Volunteer, VolunteerCreationAttributes } from '~/models/Volunteers.model';

export const getVolunteers = async (params: any): Promise<Volunteer[]> => {
  return await Volunteer.findAll(params);
};

export const getVolunteerById = async (id: number): Promise<Volunteer | null> => {
  return await Volunteer.findByPk(id);
};

export const createVolunteer = async (data: VolunteerCreationAttributes): Promise<Volunteer> => {
  return await Volunteer.create(data);
};

export const updateVolunteer = async (id: number, data: Partial<Volunteer>): Promise<[number, Volunteer[]]> => {
  return await Volunteer.update(data, {
    where: { id },
    returning: true,
  });
};

export const deleteVolunteer = async (id: number): Promise<number> => {
  return await Volunteer.destroy({
    where: { id },
  });
};

