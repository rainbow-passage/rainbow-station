import { Model, Table, Column, DataType, IsUrl, Index, Sequelize, IsEmail, IsNumeric, Length, IsDate, IsAlpha } from 'sequelize-typescript';
import type { PersonAttributes, PersonCreationAttributes, SocialAttributes, SocialCreationAttributes, DonationAttributes, DonationCreationAttributes } from '~/interfaces';

// write interfaces to extend the interfaces person, social, and donor interfaces

export interface DonorAttributes extends PersonAttributes, SocialAttributes, DonationAttributes { }
export interface DonorCreationAttributes extends PersonCreationAttributes, SocialCreationAttributes, DonationCreationAttributes { }

const sequelize = new Sequelize({
  dialect: 'mysql',
  storage: `mysql://${process.env.DB_ROOT}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/clients`,
  logging: true,
})

@Table({
  timestamps: true,
  tableName: 'Donors'
})
export class Donor extends Model<DonorAttributes, DonorCreationAttributes> implements DonorAttributes {

  // FileRef
  // PersonAttributes in Person.d.ts
  
  @Index
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  })
  id!: number;

  @IsAlpha
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @Length({ min: 2, max: 64 })
  pronouns!: string;

  @IsAlpha
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  honorific!: string;

  @IsAlpha
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  firstName!: string;

  @IsAlpha
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lastName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  middleName?: string;

  @IsEmail
  @Index
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email!: string;

  @IsNumeric
  @Index
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone?: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  address2?: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  city?: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  state?: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @Length({ min: 5, max: 10 })
  zip?: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @Length({ min: 2, max: 56 })
  country!: string;

  @IsDate
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  birthDate?: Date;

  // FileRef
  // SocialAttributes in Social.d.ts

  @IsUrl
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  website?: string;

  @IsUrl
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  facebook?: string;

  @IsUrl
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  twitter?: string;

  @IsUrl
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  instagram?: string;

  @IsUrl
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  linkedin?: string;

  @IsUrl
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  youtube?: string;

  @IsUrl
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  tiktok?: string;

  @IsUrl
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  github?: string;

  @Index
  @Column({
    type: DataType.STRING,
    allowNull: true,
    unique: true,
  })
  discord?: string;

  @IsUrl
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  twitch?: string;

  @IsUrl
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  medium?: string;

  @IsUrl
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  slack?: string;

  // FileRef
  // DonationAttributes in Donation.d.ts

  //? What is this measurement?
  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  donationFrequency?: string;

  //? What is this measurement?
  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  donationFrequencyOther?: string;

  @IsNumeric
  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  donationAmount?: number;

  @IsNumeric
  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  donationAmountOther?: number;

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

  @IsDate
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  createdAt!: Date;

  @IsDate
  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  updatedAt?: Date;

  @IsDate
  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  deletedAt?: Date;

  ////////////////////

  sequelize: Sequelize;

  constructor() {
    super();
    this.sequelize = sequelize;
  }
}
