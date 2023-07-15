import type { Optional } from "sequelize"

export interface ResourceAttributes {
  availability?: string;
  whenToContact?: string;
  howToContact?: string;
  howToContactOther?: string;
  workStatus?: string;
  contractTerm?: string;
  compensation?: number;
  compensationOther?: number;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface ResourceCreationAttributes extends Optional<ResourceAttributes,
  "availability" | "whenToContact" | "howToContact" | "howToContactOther" | "workStatus" | "contractTerm" | "compensation" | "compensationOther" | "updatedAt" | "deletedAt"> { }

/*

  // FileRef
  // ResourceAttributes in Resource.d.ts

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  availability?: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  whenToContact?: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  howToContact?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  howToContactOther?: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  workStatus?: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  contractTerm?: string;

  @IsNumeric
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  compensation?: number;

  @IsNumeric
  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  compensationOther?: number;

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
