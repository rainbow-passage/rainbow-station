import { Model, ForeignKey, Table } from 'sequelize-typescript';
import { Group } from '~/models/Groups.model';
import { Volunteer } from '~/models/Volunteers.model';
import { Employee } from '~/models/Employees.model';
import { GroupMemberAttributes, GroupMemberCreationAttributes } from '~/interfaces';
import { Client } from './Clients.model';

@Table({
  tableName: 'GroupVolunteers',
  timestamps: false,
})
export class GroupMembers extends Model<GroupMemberAttributes, GroupMemberCreationAttributes> implements GroupMemberAttributes {
  @ForeignKey(() => Group)
  groupId!: number;

  @ForeignKey(() => Volunteer)
  volunteerId?: number;

  @ForeignKey(() => Employee)
  employeeId?: number;

  @ForeignKey(() => Client)
  clientId?: number;
}
