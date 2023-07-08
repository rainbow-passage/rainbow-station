import type { Optional } from "sequelize";

export interface DonationAttributes {
  donationFrequency?: string;
  donationFrequencyOther?: string;
  donationAmount?: string;
  donationAmountOther?: string;
  donationMethod?: string;
  donationMethodOther?: string;
  donationNotes?: string;
  donorLiaison?: string;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface DonationCreationAttributes extends Optional<DonationAttributes, "donationFrequency" | "donationFrequencyOther" | "donationAmount" | "donationAmountOther" | "donationMethod" | "donationMethodOther" | "donationNotes" | "donorLiaison" | "updatedAt" | "deletedAt"> { }
