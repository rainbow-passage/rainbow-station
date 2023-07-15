import type { Optional } from "sequelize";

export interface TaskMemberAttributes {
  taskId: number;
  volunteerId?: number;
  employeeId?: number;
  clientId?: number;
  donorId?: number;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface TaskMemberCreationAttributes extends Optional<TaskMemberAttributes, "volunteerId" | "employeeId" | "clientId" | "donorId" | "updatedAt" | "deletedAt"> { }
