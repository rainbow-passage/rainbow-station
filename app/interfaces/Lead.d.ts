import type { Optional } from "sequelize";

export interface LeadAttributes {
  id: number;
  leadName: string;
  leadDetails?: string;
  leadNotes?: string;
  leadStatus: string;
  leadCoordinator?: string;
  leadCoordinatorOther?: string;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface LeadCreationAttributes extends Optional<LeadAttributes, "leadDetails" | "leadNotes" | "leadCoordinator" | "leadCoordinatorOther" | "updatedAt" | "deletedAt"> { }
