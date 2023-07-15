import type { Optional } from "sequelize";

export interface OrganizationMemberAttributes {
  organizationId: number;
  volunteerId?: number;
  employeeId?: number;
  clientId?: number;
  donorId?: number;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface OrganizationMemberCreationAttributes extends Optional<OrganizationMemberAttributes, "volunteerId" | "employeeId" | "clientId" | "donorId" | "updatedAt" | "deletedAt"> { }
