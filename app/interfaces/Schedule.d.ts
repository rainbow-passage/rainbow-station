import type { Optional } from "sequelize";

export interface ScheduleAttributes {
  id: number;
  scheduleName?: string;
  scheduleAvailability?: string;
  scheduleAvailabilityOther?: string;
  scheduleFrequency?: string;
  scheduleFrequencyOther?: string;
  scheduleNotes?: string;
  scheduleCoordinator?: string;
  scheduleCoordinatorOther?: string;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface ScheduleCreationAttributes extends Optional<ScheduleAttributes, "scheduleAvailability" | "scheduleAvailabilityOther" | "scheduleFrequency" | "scheduleFrequencyOther" | "scheduleNotes" | "scheduleCoordinator" | "scheduleCoordinatorOther" | "updatedAt" | "deletedAt"> { }
