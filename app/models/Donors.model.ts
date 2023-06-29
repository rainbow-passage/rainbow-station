import { Model, Table, Column, DataType } from 'sequelize-typescript';
import type { PersonAttributes, PersonCreationAttributes, SocialAttributes, SocialCreationAttributes, DonationAttributes, DonationCreationAttributes } from './Interfaces';


// write interfaces to extend the interfaces person, social, and donor interfaces

interface DonorAttributes extends PersonAttributes, SocialAttributes, DonationAttributes {}
interface DonorCreationAttributes extends PersonCreationAttributes, SocialCreationAttributes, DonationCreationAttributes {}

@Table({
    timestamps: true,
    tableName: 'Donors'
})
export class Donor extends Model<DonorAttributes, DonorCreationAttributes> implements DonorAttributes {
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
    country!: string;

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
    donationFrequency?: string;
    donationFrequencyOther?: string;
    donationAmount?: string;
    donationAmountOther?: string;
    donationMethod?: string;
    donationMethodOther?: string;
    donationNotes?: string;
    donorLiaison?: string;
}