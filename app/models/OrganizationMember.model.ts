import { Model, ForeignKey, Table } from 'sequelize-typescript';
import { Organization } from '~/models/Organizations.model';
import { Volunteer } from '~/models/Volunteers.model';
import { Employee } from '~/models/Employees.model';
import { Client } from '~/models/Clients.model';
import { OrganizationMemberAttributes, OrganizationMemberCreationAttributes } from '~/interfaces';

@Table({
  tableName: 'OrganizationVolunteers',
  timestamps: false,
})
export class OrganizationMembers extends Model<OrganizationMemberAttributes, OrganizationMemberCreationAttributes> implements OrganizationMemberAttributes {
  @ForeignKey(() => Organization)
  organizationId!: number;

  @ForeignKey(() => Volunteer)
  volunteerId?: number;

  @ForeignKey(() => Employee)
  employeeId?: number;

  @ForeignKey(() => Client)
  clientId?: number;
}
