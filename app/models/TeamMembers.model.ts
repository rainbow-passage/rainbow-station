import { Model, ForeignKey, Table } from 'sequelize-typescript';
import { Team } from '~/models/Teams.model';
import { Volunteer } from '~/models/Volunteers.model';
import { Employee } from '~/models/Employees.model';
import { TeamMemberAttributes, TeamMemberCreationAttributes } from '~/interfaces';

@Table({
  tableName: 'TeamVolunteers',
  timestamps: false,
})
export class TeamMembers extends Model<TeamMemberAttributes, TeamMemberCreationAttributes> implements TeamMemberAttributes {
  @ForeignKey(() => Team)
  teamId!: number;

  @ForeignKey(() => Volunteer)
  volunteerId?: number;

  @ForeignKey(() => Employee)
  employeeId?: number;
}

