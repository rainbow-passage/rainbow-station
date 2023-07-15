import { Model, ForeignKey, Table } from 'sequelize-typescript';
import { Property } from '~/models/Properties.model';
import { Volunteer } from '~/models/Volunteers.model';
import { Employee } from '~/models/Employees.model';
import { Client } from '~/models/Clients.model';
import { PropertyMemberAttributes, PropertyMemberCreationAttributes } from '~/interfaces';

@Table({
  tableName: 'PropertyVolunteers',
  timestamps: false,
})
export class PropertyMembers extends Model<PropertyMemberAttributes, PropertyMemberCreationAttributes> implements PropertyMemberAttributes {
  @ForeignKey(() => Property)
  propertyId!: number;

  @ForeignKey(() => Volunteer)
  volunteerId?: number;

  @ForeignKey(() => Employee)
  employeeId?: number;

  @ForeignKey(() => Client)
  clientId?: number;
}