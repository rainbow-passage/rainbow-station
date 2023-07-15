import type { Optional } from "sequelize";

export interface GroupMemberAttributes {
  groupId: number;
  volunteerId?: number;
  employeeId?: number;
  clientId?: number;
  donorId?: number;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface GroupMemberCreationAttributes extends Optional<GroupMemberAttributes, "volunteerId" | "employeeId" | "clientId" | "donorId" | "updatedAt" | "deletedAt"> { }
