import { GroupCreationAttributes } from "~/interfaces";
import { Group } from "~/models/Groups.model";

export const getGroups = async (params: any): Promise<Group[]> => {
  return await Group.findAll(params);
};

export const getGroupById = async (id: number): Promise<Group | null> => {
  return await Group.findByPk(id);
};

export const createGroup = async (data: GroupCreationAttributes): Promise<Group> => {
  return await Group.create(data);
};

export const updateGroup = async (id: number, data: Partial<Group>): Promise<[number, Group[]]> => {
  return await Group.update(data, {
    where: { id },
    returning: true,
  });
};

export const deleteGroup = async (id: number): Promise<number> => {
  return await Group.destroy({
    where: { id },
  });
}; 