import { Optional } from "sequelize";

export interface TeamMemberAttributes {
  id: number;
  teamId: number;
  userId: number;
  volunteerId?: number;
  employeeId?: number;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface TeamMemberCreationAttributes extends Optional<TeamMemberAttributes, "volunteerId" | "employeeId" | "updatedAt" | "deletedAt"> { }
