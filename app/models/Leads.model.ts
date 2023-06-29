import { Model, Column, Table, DataType } from 'sequelize-typescript';
import type { LeadAttributes, LeadCreationAttributes } from './Interfaces';

@Table({
  timestamps: true,
  tableName: 'Leads'
})
export class Lead extends Model<LeadAttributes, LeadCreationAttributes> implements LeadAttributes {
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
  leadName!: string;
  leadStatus!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  leadDetails?: string;
  leadNotes?: string;
  leadCoordinator?: string;
  leadCoordinatorOther?: string;
  leadMembers?: string;
}

