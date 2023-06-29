import { Model, Column, Table, DataType } from 'sequelize-typescript';
import type { ScheduleAttributes, ScheduleCreationAttributes } from './Interfaces';

@Table({
  timestamps: true,
  tableName: 'Schedulers'
})
export class Scheduler extends Model<ScheduleAttributes, ScheduleCreationAttributes> implements ScheduleAttributes {
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
  scheduleAvailability?: string;
  scheduleAvailabilityOther?: string;
  scheduleFrequency?: string;
  scheduleFrequencyOther?: string;
  scheduleNotes?: string;
  scheduleCoordinator?: string;
  scheduleCoordinatorOther?: string;
}

