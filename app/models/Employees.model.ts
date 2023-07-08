import { Model, Table, Column, DataType, Index, IsUrl, IsUUID } from 'sequelize-typescript';
import type { PersonAttributes, PersonCreationAttributes, ResourceAttributes, ResourceCreationAttributes, SocialAttributes, SocialCreationAttributes } from './Interfaces';


// write interfaces to extend the interfaces person, social, and resource interfaces

interface EmployeeAttributes extends PersonAttributes, SocialAttributes, ResourceAttributes { }
interface EmployeeCreationAttributes extends PersonCreationAttributes, SocialCreationAttributes, ResourceCreationAttributes { }

@Table({
  timestamps: true,
  tableName: 'Volunteers'
})
export class Employee extends Model<EmployeeAttributes, EmployeeCreationAttributes> implements EmployeeAttributes {
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
    allowNull: false
  })
  availability!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  whenToContact!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  howToContact!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  workStatus!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  contractTerm!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  compensation!: string;

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
  howToContactOther?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  compensationOther?: string;
}
