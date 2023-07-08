import type { Optional } from "sequelize";

export interface UserMemberAttributes {
  id: number;
  userId: number;
  volunteerId?: number;
  employeeId?: number;
  directorId?: number;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface UserMemberCreationAttributes extends Optional<UserMemberAttributes, "volunteerId" | "employeeId" | "directorId" | "updatedAt" | "deletedAt"> { }
