import type { Optional } from "sequelize";

export interface EventAttributes {
  id: number;
  eventName: string;
  eventDate?: Date;
  eventNotes?: string;
  eventStatus: string;
  eventCoordinator?: string;
  eventCoordinatorOther?: string;
  eventMembers?: string;
  eventFrequency?: string;
  eventLocation: string;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface EventCreationAttributes extends Optional<EventAttributes, "eventDate" | "eventNotes" | "eventCoordinator" | "eventCoordinatorOther" | "eventMembers" | "eventFrequency" | "updatedAt" | "deletedAt"> { }
