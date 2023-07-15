import type { Optional } from "sequelize";

export interface SchedulerMemberAttributes {
  schedulerId: number;
  volunteerId?: number;
  employeeId?: number;
  clientId?: number;
  donorId?: number;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface SchedulerMemberCreationAttributes extends Optional<SchedulerMemberAttributes, "volunteerId" | "employeeId" | "clientId" | "donorId" | "updatedAt" | "deletedAt"> { }
