import { Model, Column, Table, DataType, Index, IsUUID } from 'sequelize-typescript';
import type { TaskAttributes, TaskCreationAttributes } from './Interfaces';

@Table({
  timestamps: true,
  tableName: 'Tasks'
})
export class Task extends Model<TaskAttributes, TaskCreationAttributes> implements TaskAttributes {
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
  taskName!: string;
  taskStatus!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  taskNotes?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  taskCoordinator?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  taskCoordinatorOther?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  taskMembers?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  taskFrequency?: string;
}