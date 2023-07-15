import { Model, Table, Column, DataType, Index, IsUUID } from 'sequelize-typescript';
import { TeamAttributes, TeamCreationAttributes } from '~/interfaces';

@Table({
  tableName: 'Teams',
  modelName: 'Team',
  timestamps: true,
})
export class Team extends Model<TeamAttributes, TeamCreationAttributes> {
  @Index
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,

  })
  teamName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  teamNotes?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  teamCoordinator?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  teamCoordinatorOther?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  teamMembers?: string;
}