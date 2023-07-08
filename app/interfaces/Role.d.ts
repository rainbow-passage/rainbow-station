import type { Optional } from "sequelize";

export interface RoleAttributes {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface RoleCreationAttributes extends Optional<RoleAttributes, "updatedAt" | "deletedAt"> { }
