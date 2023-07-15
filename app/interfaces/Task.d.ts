import type { Optional } from "sequelize";

export interface TaskAttributes {
  id: number;
  taskName: string;
  taskNotes?: string;
  taskCoordinator?: string;
  taskCoordinatorOther?: string;
  taskStatus: string;
  taskMembers?: string;
  taskFrequency?: string;
  dueDate?: Date;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface TaskCreationAttributes extends Optional<TaskAttributes, "taskNotes" | "taskCoordinator" | "taskCoordinatorOther" | "taskMembers" | "taskFrequency" | "dueDate" | "updatedAt" | "deletedAt"> { }
