import { Model, Column, Table, DataType, Index, IsUUID } from 'sequelize-typescript';
import type { EventAttributes, EventCreationAttributes } from '~/interfaces';

@Table({
  timestamps: true,
  tableName: 'Events'
})
export class Event extends Model<EventAttributes, EventCreationAttributes> implements EventAttributes {
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
  eventName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  eventDate?: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  eventStatus!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  eventLocation!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  eventNotes?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  eventCoordinator?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  eventCoordinatorOther?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  eventMembers?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  eventFrequency?: string;
}