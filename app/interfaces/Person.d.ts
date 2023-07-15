import type { Optional } from "sequelize";

export interface PersonAttributes {
  id: number;
  pronouns: string;
  honorific: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  email: string;
  phone?: string;
  address?: string;
  address2?: string;
  city?: string;
  state?: string;
  zip?: string;
  country: string;
  birthDate?: Date;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface PersonCreationAttributes extends Optional<PersonAttributes, "middleName" | "phone" | "address" | "address2" | "city" | "state" | "zip" | "birthDate" | "updatedAt" | "deletedAt" > { }

/*

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

*/
