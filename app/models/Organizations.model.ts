import { Model, Column, Table, DataType, Index } from 'sequelize-typescript';
import type { OrganizationAttributes, OrganizationCreationAttributes } from './Interfaces';

@Table({
  timestamps: true,
  tableName: 'Organizations'
})
export class Organization extends Model<OrganizationAttributes, OrganizationCreationAttributes> implements OrganizationAttributes {
  @Index
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

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  organizationNotes?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  organizationCoordinator?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  organizationCoordinatorOther?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  organizationMembers?: string;
}

