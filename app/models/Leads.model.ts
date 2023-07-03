import { Model, Column, Table, DataType, Index } from 'sequelize-typescript';
import type { LeadAttributes, LeadCreationAttributes } from './Interfaces';

@Table({
  timestamps: true,
  tableName: 'Leads'
})
export class Lead extends Model<LeadAttributes, LeadCreationAttributes> implements LeadAttributes {
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
  leadName!: string;
  leadStatus!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  leadDetails?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  leadNotes?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  leadCoordinator?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  leadCoordinatorOther?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  leadMembers?: string;
}

