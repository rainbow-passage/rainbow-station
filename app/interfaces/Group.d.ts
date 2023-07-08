import type { Optional } from "sequelize";

export interface GroupAttributes {
  id: number;
  groupName: string;
  groupNotes?: string;
  groupCoordinator?: string;
  groupCoordinatorOther?: string;
  groupMembers?: string;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}


export interface GroupCreationAttributes extends Optional<GroupAttributes, "groupNotes" | "groupCoordinator" | "groupCoordinatorOther" | "groupMembers" | "updatedAt" | "deletedAt"> { }
