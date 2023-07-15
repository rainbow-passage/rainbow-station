import type { Optional } from "sequelize";

export interface DonationAttributes {
  donationFrequency?: string;
  donationFrequencyOther?: string;
  donationAmount?: number;
  donationAmountOther?: number;
  donationMethod?: string;
  donationMethodOther?: string;
  donationNotes?: string;
  donorLiaison?: string;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface DonationCreationAttributes extends Optional<DonationAttributes, "donationFrequency" | "donationFrequencyOther" | "donationAmount" | "donationAmountOther" | "donationMethod" | "donationMethodOther" | "donationNotes" | "donorLiaison" | "updatedAt" | "deletedAt"> { }

/*

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
  
*/
