import { Model, ForeignKey, Table } from 'sequelize-typescript';
import { Task } from '~/models/Tasks.model';
import { Volunteer } from '~/models/Volunteers.model';
import { Employee } from '~/models/Employees.model';
import { Client } from '~/models/Clients.model';
import { Donor } from '~/models/Donors.model';
import { TaskMemberAttributes, TaskMemberCreationAttributes } from './Interfaces';

@Table({
  tableName: 'TaskVolunteers',
  timestamps: false,
})
export class TaskMembers extends Model<TaskMemberAttributes, TaskMemberCreationAttributes> implements TaskMemberAttributes {
  @ForeignKey(() => Task)
  taskId!: number;

  @ForeignKey(() => Volunteer)
  volunteerId?: number;

  @ForeignKey(() => Employee)
  employeeId?: number;

  @ForeignKey(() => Client)
  clientId?: number;
  
  @ForeignKey(() => Donor)
  donorId?: number;
}