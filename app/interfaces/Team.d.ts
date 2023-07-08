import type { Optional } from "sequelize";

export interface TeamAttributes {
  id: number;
  teamName: string;
  teamNotes?: string;
  teamCoordinator?: string;
  teamCoordinatorOther?: string;
  teamMembers?: string;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface TeamCreationAttributes extends Optional<TeamAttributes, "teamNotes" | "teamCoordinator" | "teamCoordinatorOther" | "teamMembers" | "updatedAt" | "deletedAt"> { }
