import type { Optional } from "sequelize";

export interface OrganizationAttributes {
  id: number;
  organizationName: string;
  organizationType: string;
  organizationTypeOther?: string;
  organizationNotes?: string;
  organizationCoordinator?: string;
  organizationCoordinatorOther?: string;
  organizationMembers?: string;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface OrganizationCreationAttributes extends Optional<OrganizationAttributes, "organizationTypeOther" | "organizationNotes" | "organizationCoordinator" | "organizationCoordinatorOther" | "organizationMembers" | "updatedAt" | "deletedAt"> { }
