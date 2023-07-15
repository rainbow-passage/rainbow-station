import { Model, Table, Column, DataType, IsUrl, Index, Sequelize, IsEmail, IsNumeric, Length, IsDate, IsAlpha } from 'sequelize-typescript';
import type { PersonAttributes, PersonCreationAttributes, SocialAttributes, SocialCreationAttributes, PackageAttributes, PackageCreationAttributes } from '~/interfaces';

// write the Client interfaces that extend the Person, Social, and Package interfaces

export interface ClientAttributes extends PersonAttributes, SocialAttributes, PackageAttributes { }
export interface ClientCreationAttributes extends PersonCreationAttributes, SocialCreationAttributes, PackageCreationAttributes { }

const sequelize = new Sequelize({
  dialect: 'mysql',
  storage: `mysql://${process.env.DB_ROOT}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/clients`,
  logging: true,
})

@Table({
  timestamps: true,
  tableName: 'Clients'
})
export class Client extends Model<ClientAttributes, ClientCreationAttributes> implements ClientAttributes {

  // FileRef
  // PersonAttributes in Person.d.ts
  
  @Index
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
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
  phone!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  address2?: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  city!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  state!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @Length({ min: 5, max: 10 })
  zip!: string;

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
  birthDate!: Date;

  // FileRef
  // PackageAttributes in Package.d.ts

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  packageNeeds!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  packageTimeToReach?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  packageEmergencyContact?: string;

  @IsNumeric
  @Index
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  @Length({ min: 10, max: 18 })
  packageEmergencyContactPhone?: string;

  @IsEmail
  @Index
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  packageEmergencyContactEmail?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  packageEmergencyContactRelationship?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  packageNotes?: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  packageStatus!: string;

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

  ////////////////////

  sequelize: Sequelize;

  constructor() {
    super();
    this.sequelize = sequelize;
  }
}
