import { Model, Table, Column, DataType, Index, IsUrl, IsUUID } from 'sequelize-typescript';
import type { PersonAttributes, PersonCreationAttributes, SocialAttributes, SocialCreationAttributes, DonationAttributes, DonationCreationAttributes } from './Interfaces';


// write interfaces to extend the interfaces person, social, and donor interfaces

export interface DonorAttributes extends PersonAttributes, SocialAttributes, DonationAttributes { }
export interface DonorCreationAttributes extends PersonCreationAttributes, SocialCreationAttributes, DonationCreationAttributes { }

@Table({
  timestamps: true,
  tableName: 'Donors'
})
export class Donor extends Model<DonorAttributes, DonorCreationAttributes> implements DonorAttributes {
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
  pronouns!: string;


  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  honorific!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  firstName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  lastName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  country!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  middleName?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  phone?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  address?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  address2?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  city?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  state?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  zip?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  birthDate?: Date;

  @IsUrl
  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  website?: string;

  @IsUrl
  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  facebook?: string;

  @IsUrl
  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  twitter?: string;

  @IsUrl
  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  instagram?: string;

  @IsUrl
  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  linkedin?: string;

  @IsUrl
  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  youtube?: string;

  @IsUrl
  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  tiktok?: string;

  @IsUrl
  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  github?: string;

  @IsUrl
  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  discord?: string;

  @IsUrl
  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  slack?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  donationFrequency?: string;


  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  donationFrequencyOther?: string;


  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  donationAmount?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  donationAmountOther?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  donationMethod?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  donationMethodOther?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  donationNotes?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  donorLiaison?: string;
}