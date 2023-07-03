import { Model, Table, Column, DataType, IsUrl, Index } from 'sequelize-typescript';
import type { PersonAttributes, PersonCreationAttributes, SocialAttributes, SocialCreationAttributes, PackageAttributes, PackageCreationAttributes } from './Interfaces';

// write the Client interfaces that extend the Person, Social, and Package interfaces

export interface ClientAttributes extends PersonAttributes, SocialAttributes, PackageAttributes { }
export interface ClientCreationAttributes extends PersonCreationAttributes, SocialCreationAttributes, PackageCreationAttributes { }

@Table({
  timestamps: true,
  tableName: 'Clients'
})
export class Client extends Model<ClientAttributes, ClientCreationAttributes> implements ClientAttributes {
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
  phone!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  address!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  city!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  state!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  zip!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  country!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  birthDate!: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  packageNeeds!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  packageStatus!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  middleName?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  address2?: string;

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

  @IsUrl
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  discord?: string;

  @IsUrl
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  slack?: string;

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

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  packageEmergencyContactPhone?: string;

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
}

