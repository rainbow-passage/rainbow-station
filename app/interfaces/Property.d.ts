import type { Optional } from "sequelize";

export interface PropertyAttributes {
  id: number;
  propertyName: string;
  propertyAddress: string;
  propertyAddress2?: string;
  propertyCity: string;
  propertyState: string;
  propertyZip: string;
  propertyCountry: string;
  propertyNotes?: string;
  propertyCoordinator?: string;
  propertyCoordinatorOther?: string;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface PropertyCreationAttributes extends Optional<PropertyAttributes, "propertyAddress2" | "propertyNotes" | "propertyCoordinator" | "propertyCoordinatorOther" | "updatedAt" | "deletedAt"> { }
