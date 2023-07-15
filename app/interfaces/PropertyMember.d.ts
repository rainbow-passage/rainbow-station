import type { Optional } from "sequelize";

export interface PropertyMemberAttributes {
  propertyId: number;
  volunteerId?: number;
  employeeId?: number;
  clientId?: number;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface PropertyMemberCreationAttributes extends Optional<PropertyMemberAttributes, "volunteerId" | "employeeId" | "clientId" | "updatedAt" | "deletedAt"> { }
