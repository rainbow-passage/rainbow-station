import { Model, Table, Column, DataType } from 'sequelize-typescript';
import type { PersonAttributes, PersonCreationAttributes, ResourceAttributes, ResourceCreationAttributes, SocialAttributes, SocialCreationAttributes } from './Interfaces';


// write interfaces to extend the interfaces person, social, and resource interfaces

interface EmployeeAttributes extends PersonAttributes, SocialAttributes, ResourceAttributes {}
interface EmployeeCreationAttributes extends PersonCreationAttributes, SocialCreationAttributes, ResourceCreationAttributes {}

@Table({
    timestamps: true,
    tableName: 'Volunteers'
})
export class Employee extends Model<EmployeeAttributes, EmployeeCreationAttributes> implements EmployeeAttributes {
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
    pronouns!: string;
    
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    honorific!: string;
    firstName!: string;
    lastName!: string;
    email!: string;
    country!: string;
    availability!: string;
    whenToContact!: string;
    howToContact!: string;
    workStatus!: string;
    contractTerm!: string;
    compensation!: string;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    middleName?: string;
    phone?: string;
    address?: string;
    address2?: string;
    city?: string;
    state?: string;
    zip?: string;
    birthDate?: Date;
    website?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
    tiktok?: string;
    github?: string;
    discord?: string;
    slack?: string;
    howToContactOther?: string;
    compensationOther?: string;
}
