import type { Optional } from "sequelize";

export interface PackageAttributes {
  packageNeeds?: string;
  packageTimeToReach?: string;
  packageEmergencyContact?: string;
  packageEmergencyContactPhone?: string;
  packageEmergencyContactEmail?: string;
  packageEmergencyContactRelationship?: string;
  packageNotes?: string;
  packageStatus: string;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface PackageCreationAttributes extends Optional<PackageAttributes, "packageNeeds" | "packageTimeToReach" | "packageEmergencyContact" | "packageEmergencyContactPhone" | "packageEmergencyContactEmail" | "packageEmergencyContactRelationship" | "packageNotes" | "updatedAt" | "deletedAt"> { }

/*

  // FileRef
  // PackageAttributes in Package.d.ts

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  packageNeeds?: string;

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
  
*/
