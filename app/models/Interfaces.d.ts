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

export interface GroupMemberCreationAttributes extends Optional<GroupMemberAttributes, "volunteerId" | "employeeId" | "clientId" | "donorId"> { }

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

export interface OrganizationMemberCreationAttributes extends Optional<OrganizationMemberAttributes, "volunteerId" | "employeeId" | "clientId" | "donorId"> { }

export interface PropertyMemberAttributes {
  propertyId: number;
  volunteerId?: number;
  employeeId?: number;
  clientId?: number;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface PropertyMemberCreationAttributes extends Optional<PropertyMemberAttributes, "volunteerId" | "employeeId" | "clientId"> { }

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

export interface TaskMemberCreationAttributes extends Optional<TaskMemberAttributes, "volunteerId" | "employeeId" | "clientId" | "donorId"> { }

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

export interface SchedulerMemberCreationAttributes extends Optional<SchedulerMemberAttributes, "volunteerId" | "employeeId" | "clientId" | "donorId"> { }

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

export interface EventMemberCreationAttributes extends Optional<EventMemberAttributes, "volunteerId" | "employeeId" | "clientId" | "donorId" | "propertyId"> { }