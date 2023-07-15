import type { Optional } from "sequelize";

export interface EventMemberAttributes {
  eventId: number;
  volunteerId?: number;
  employeeId?: number;
  clientId?: number;
  donorId?: number;
  propertyId?: number;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface EventMemberCreationAttributes extends Optional<EventMemberAttributes, "volunteerId" | "employeeId" | "clientId" | "donorId" | "propertyId" | "updatedAt" | "deletedAt"> { }