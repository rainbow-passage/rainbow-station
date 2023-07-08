import { Model, Column, Table, DataType, Index, IsUUID } from 'sequelize-typescript';
import type { ScheduleAttributes, ScheduleCreationAttributes } from './Interfaces';

@Table({
  timestamps: true,
  tableName: 'Schedulers'
})
export class Scheduler extends Model<ScheduleAttributes, ScheduleCreationAttributes> implements ScheduleAttributes {
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
    allowNull: true
  })
  scheduleName?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  scheduleAvailability?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  scheduleAvailabilityOther?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  scheduleFrequency?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  scheduleFrequencyOther?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  scheduleNotes?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  scheduleCoordinator?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  scheduleCoordinatorOther?: string;
}

