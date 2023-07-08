import type { Optional } from "sequelize";

export interface RoleMemberAttributes {
  id: number;
  roleId: number;
  userId: number;
  volunteerId?: number;
  employeeId?: number;
  directorId?: number;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface RoleMemberCreationAttributes extends Optional<RoleMemberAttributes, "volunteerId" | "employeeId" | "directorId" | "updatedAt" | "deletedAt"> { }
