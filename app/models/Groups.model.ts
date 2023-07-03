import { Model, Column, Table, DataType, Index } from 'sequelize-typescript';
import type { GroupAttributes, GroupCreationAttributes } from './Interfaces';

@Table({
  timestamps: true,
  tableName: 'Groups'
})
export class Group extends Model<GroupAttributes, GroupCreationAttributes> implements GroupAttributes {
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
    allowNull: false,
  })
  groupName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  groupNotes?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  groupCoordinator?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  groupCoordinatorOther?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  groupMembers?: string;

}

