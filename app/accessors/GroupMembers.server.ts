import { GroupMembers } from "~/models/GroupMembers.model";

// Make the accessors for the GroupMembers Join Table available to the server

export const getGroupMembers = async (params: any): Promise<GroupMembers[]> => {
  return await GroupMembers.findAll(params);

};

export const getGroupMember = async (params: any): Promise<GroupMembers> => {
  return await GroupMembers.findOne(params);

};

export const createGroupMember = async (params: any): Promise<GroupMembers> => {
  return await GroupMembers.create(params);

};

export const updateGroupMember = async (groupId: number, data: Partial<GroupMembers>): Promise<[number, GroupMembers[]]> => {
  return await GroupMembers.update(data, {
    where: { groupId },
    returning: true,

  });

};

export const deleteGroupMember = async (): Promise<GroupMembers> => {
  return {} as GroupMembers;
};