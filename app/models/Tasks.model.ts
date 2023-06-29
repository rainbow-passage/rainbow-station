import { Model, Column, Table, DataType } from 'sequelize-typescript';
import type { TaskAttributes, TaskCreationAttributes } from './Interfaces';

@Table({
    timestamps: true,
    tableName: 'Tasks'
})
export class Task extends Model<TaskAttributes, TaskCreationAttributes> implements TaskAttributes {
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
    taskCoordinator?: string;
    taskCoordinatorOther?: string;
    taskMembers?: string;
    taskFrequency?: string;
}