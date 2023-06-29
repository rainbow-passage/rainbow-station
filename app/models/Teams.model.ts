import { Model, Table, Column, DataType } from 'sequelize-typescript';
import { TeamAttributes, TeamCreationAttributes } from './Interfaces';

@Table({
  tableName: 'Teams',
  modelName: 'Team',
  timestamps: true,
})
export class Team extends Model<TeamAttributes, TeamCreationAttributes> {
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
  teamCoordinator?: string;
  teamCoordinatorOther?: string;
  teamMembers?: string;
}