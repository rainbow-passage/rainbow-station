import { TeamMembers } from "~/models/TeamMembers.model";

// Make the accessors for the TeamMembers Join Table available to the server

export const getTeamMembers = async (params: any): Promise<TeamMembers[]> => {
  return await TeamMembers.findAll(params);

};

export const getTeamMember = async (params: any): Promise<TeamMembers> => {
  return await TeamMembers.findOne(params);

};

export const createTeamMember = async (params: any): Promise<TeamMembers> => {
  return await TeamMembers.create(params);

};

export const updateTeamMember = async (teamId: number, data: Partial<TeamMembers>): Promise<[number, TeamMembers[]]> => {
  return await TeamMembers.update(data, {
    where: { teamId },
    returning: true,

  });

};

export const deleteTeamMember = async (): Promise<TeamMembers> => {
  return {} as TeamMembers;
};