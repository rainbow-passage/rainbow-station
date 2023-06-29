import { Model, Column, Table, DataType } from 'sequelize-typescript';
import type { OrganizationAttributes, OrganizationCreationAttributes } from './Interfaces';

@Table({
  timestamps: true,
  tableName: 'Organizations'
})
export class Organization extends Model<OrganizationAttributes, OrganizationCreationAttributes> implements OrganizationAttributes {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  organizationName!: string;
  organizationType!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  organizationTypeOther?: string;
  organizationNotes?: string;
  organizationCoordinator?: string;
  organizationCoordinatorOther?: string;
  organizationMembers?: string;
}

