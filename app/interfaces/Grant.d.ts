import type { Optional } from "sequelize";

export interface GrantAttributes {
  id: number;
  grantName: string;
  grantAmount?: string;
  grantNotes?: string;
  grantDeadline?: string;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface GrantCreationAttributes extends Optional<GrantAttributes, "grantAmount" | "grantNotes" | "grantDeadline" | "updatedAt" | "deletedAt"> { }
