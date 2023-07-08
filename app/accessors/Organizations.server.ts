import { Organization } from '~/models/Organizations.model';

export const getOrganizations = async (params: any): Promise<Organization[]> => {
  return await Organization.findAll(params);
};

export const getOrganizationById = async (id: number): Promise<Organization | null> => {
  return await Organization.findByPk(id);
};

export const createOrganization = async (data: Organization): Promise<Organization> => {
  return await Organization.create(data);
};

export const updateOrganization = async (id: number, data: Partial<Organization>): Promise<[number, Organization[]]> => {
  return await Organization.update(data, {
    where: { id },
    returning: true,
  });
};

export const deleteOrganization = async (id: number): Promise<number> => {
  return await Organization.destroy({
    where: { id },
  });
};

