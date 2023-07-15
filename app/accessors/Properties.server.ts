import { PropertyCreationAttributes } from '~/interfaces';
import { Property } from '~/models/Properties.model';

export const getProperties = async (params: any): Promise<Property[]> => {
  return await Property.findAll(params);
};

export const getPropertyById = async (id: number): Promise<Property | null> => {
  return await Property.findByPk(id);
};

export const createProperty = async (data: PropertyCreationAttributes): Promise<Property> => {
  return await Property.create(data);
};

export const updateProperty = async (id: number, data: Partial<Property>): Promise<[number, Property[]]> => {
  return await Property.update(data, {
    where: { id },
    returning: true,
  });
};

export const deleteProperty = async (id: number): Promise<number> => {
  return await Property.destroy({
    where: { id },
  });
};

