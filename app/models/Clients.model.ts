import { Model, Table, Column, DataType, IsUrl, Index, IsUUID, Sequelize, IsEmail, IsNumeric, Length, IsDate, IsAlpha, IsIn } from 'sequelize-typescript';
import type { PersonAttributes, PersonCreationAttributes, SocialAttributes, SocialCreationAttributes, PackageAttributes, PackageCreationAttributes } from './Interfaces';

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
  @Index
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  })
  id!: number;

  @is: /^[a-zA-Z]+\/[a-zA-Z]+$/
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  @Length({ min: 2, max: 64 })
  pronouns!: string;

@IsAlpha

  @IsIn(["De", "Dr", "Div", "Fr", "Fren", "Ind", "M", "M*", "Master", "Mr", "Miss", "Mir", "Miss", "Misc", "Mr", "Mre", "Mrs", "Ms", "Msr", "Mt", "Mm", "Mx", "Mv", "Myr", "Mys", "Mzr", "NB", "Pr", "Prof", "Ser", "Sir", "Sire", "Rev", "Sr", "Tir", "Vx", "Zr"])
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  honorific!: string;

@is: /^[a-z][a-z '-.,]{0,746}$", "^$/i/
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  firstName!: string;

  @is: /^[a-z][a-z '-.,]{0,746}$", "^$/i/
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  lastName!: string;

@is: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)", "(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])", "(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //? Add Index? (Lira)
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  @IsEmail
  email!: string;

@is: /^(?:\+1[-.\s])?(?:\(\d{3}\)", "\d{3})[-.\s]?\d{3}[-.\s]?\d{4}(?:\s*(?:x", "ext)\s*\d{1,6})?$/
  //? Add Index? (Lira)
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  @IsNumeric
  phone!: string;

@is: /\d{1,3}.?\d{0,3}\s[a-zA-Z]{2,30}\s[a-zA-Z]{2,15}/
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

@is: /^\d{5}(-\d{4})?$/
  @IsNumeric
  @Length({ min: 5, max: 10 })
  zip!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  @Length({ min: 2, max: 56 })
  country!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  @IsDate
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

  //? Add validation for Discord handles?
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

  //? Add Index? (Lira)
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  @IsNumeric
  @Length({ min: 10, max: 18 })
  packageEmergencyContactPhone?: string;

  //? Add Index? (Lira)
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  @IsEmail
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

  sequelize: Sequelize;

  constructor() {
    super();
    this.sequelize = sequelize;
  }
}

