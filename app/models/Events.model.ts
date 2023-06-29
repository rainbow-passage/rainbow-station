import { Model, Column, Table, DataType } from 'sequelize-typescript';
import type { EventAttributes, EventCreationAttributes } from './Interfaces';

@Table({
    timestamps: true,
    tableName: 'Events'
})
export class Event extends Model<EventAttributes, EventCreationAttributes> implements EventAttributes {
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
    eventStatus!: string;
    eventLocation!: string;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    eventNotes?: string;
    eventCoordinator?: string;
    eventCoordinatorOther?: string;
    eventMembers?: string;
    eventFrequency?: string;
}