import type { Optional } from "sequelize"

export interface ResourceAttributes {
  availability?: string;
  whenToContact?: string;
  howToContact?: string;
  howToContactOther?: string;
  workStatus?: string;
  contractTerm?: string;
  compensation?: string;
  compensationOther?: string;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface ResourceCreationAttributes extends Optional<ResourceAttributes,
  "availability" | "whenToContact" | "howToContact" | "howToContactOther" | "workStatus" | "contractTerm" | "compensation" | "compensationOther" | "updatedAt" | "deletedAt"> { }
