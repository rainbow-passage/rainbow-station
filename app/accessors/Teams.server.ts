import { TeamCreationAttributes } from '~/interfaces';
import { Team } from '~/models/Teams.model';

export const getTeams = async (params: any): Promise<Team[]> => {
  return await Team.findAll(params);
};

export const getTeamById = async (id: number): Promise<Team | null> => {
  return await Team.findByPk(id);
};

export const createTeam = async (data: TeamCreationAttributes): Promise<Team> => {
  return await Team.create(data);
};

export const updateTeam = async (id: number, data: Partial<Team>): Promise<[number, Team[]]> => {
  return await Team.update(data, {
    where: { id },
    returning: true,
  });
};

export const deleteTeam = async (id: number): Promise<number> => {
  return await Team.destroy({
    where: { id },
  });
};

