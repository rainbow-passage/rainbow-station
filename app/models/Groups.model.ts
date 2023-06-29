import { Model, Column, Table, DataType } from 'sequelize-typescript';
import type { GroupAttributes, GroupCreationAttributes } from './Interfaces';

@Table({
  timestamps: true,
  tableName: 'Groups'
})
export class Group extends Model<GroupAttributes, GroupCreationAttributes> implements GroupAttributes {
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
  groupCoordinator?: string;
  groupCoordinatorOther?: string;
  groupMembers?: string;

}

