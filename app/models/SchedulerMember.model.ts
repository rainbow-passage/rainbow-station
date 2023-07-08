import { Model, ForeignKey, Table } from 'sequelize-typescript';
import { Scheduler } from '~/models/Schedulers.model';
import { Volunteer } from '~/models/Volunteers.model';
import { Employee } from '~/models/Employees.model';
import { Client } from '~/models/Clients.model';
import { Donor } from '~/models/Donors.model';
import { SchedulerMemberAttributes, SchedulerMemberCreationAttributes } from './Interfaces';

@Table({
  tableName: 'SchedulerVolunteers',
  timestamps: false,
})
export class SchedulerMembers extends Model<SchedulerMemberAttributes, SchedulerMemberCreationAttributes> implements SchedulerMemberAttributes {
  @ForeignKey(() => Scheduler)
  schedulerId!: number;

  @ForeignKey(() => Volunteer)
  volunteerId?: number;

  @ForeignKey(() => Employee)
  employeeId?: number;

  @ForeignKey(() => Client)
  clientId?: number;

  @ForeignKey(() => Donor)
  donorId?: number;
}