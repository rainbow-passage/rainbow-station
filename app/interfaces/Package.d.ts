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
