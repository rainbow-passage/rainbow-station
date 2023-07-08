import type { Optional } from "sequelize";

export interface UserAttributes {
  id: number;
  username: string;
  password: string;
  email: string;
  profilePicture?: string;
  pronouns?: string;
  name?: string;
  bio?: string;
  birhtDate?: Date;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface UserCreationAttributes extends Optional<UserAttributes, "profilePicture" | "pronouns" | "name" | "updatedAt" | "deletedAt"> { }
