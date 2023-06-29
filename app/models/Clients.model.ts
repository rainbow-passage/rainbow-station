import { Model, Table, Column, DataType } from 'sequelize-typescript';
import type { PersonAttributes, PersonCreationAttributes, SocialAttributes, SocialCreationAttributes, PackageAttributes, PackageCreationAttributes } from './Interfaces';

// write the Client interfaces that extend the Person, Social, and Package interfaces

interface ClientAttributes extends PersonAttributes, SocialAttributes, PackageAttributes {}
interface ClientCreationAttributes extends PersonCreationAttributes, SocialCreationAttributes, PackageCreationAttributes {}

@Table({
    timestamps: true,
    tableName: 'Clients'
})
export class Client extends Model<ClientAttributes, ClientCreationAttributes> implements ClientAttributes {
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
    honorific!: string;
    firstName!: string;
    lastName!: string;
    email!: string;
    phone!: string;
    address!: string;
    city!: string;
    state!: string;
    zip!: string;
    country!: string;
    birthDate!: Date;
    packageNeeds!: string;
    packageStatus!: string;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    middleName?: string;
    address2?: string;
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
    packageTimeToReach?: string;
    packageEmergencyContact?: string;
    packageEmergencyContactPhone?: string;
    packageEmergencyContactEmail?: string;
    packageEmergencyContactRelationship?: string;
    packageNotes?: string;
}
    
