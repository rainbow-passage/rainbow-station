import type { Optional } from "sequelize";

export interface PersonAttributes {
  id: number;
  pronouns: string;
  honorific: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  email: string;
  phone?: string;
  address?: string;
  address2?: string;
  city?: string;
  state?: string;
  zip?: string;
  country: string;
  birthDate?: Date;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface PersonCreationAttributes extends Optional<PersonAttributes, "middleName" | "phone" | "address" | "address2" | "city" | "state" | "zip" | "birthDate" | "updatedAt" | "deletedAt" > { }
