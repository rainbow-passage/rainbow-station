
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
}

export interface PersonCreationAttributes extends Optional<PersonAttributes, "middleName" | "phone" | "address" | "address2" | "city" | "state" | "zip" | "birthDate"> { }

export interface SocialAttributes {
  website?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
  tiktok?: string;
  github?: string;
  discord?: string;
  slack?: string;
}

export interface SocialCreationAttributes extends Optional<SocialAttributes, "website" | "facebook" | "twitter" | "instagram" | "linkedin" | "youtube" | "tiktok" | "github" | "discord" | "slack"> { }

export interface ResourceAttributes {
  availability?: string;
  whenToContact?: string;
  howToContact?: string;
  howToContactOther?: string;
  workStatus?: string;
  contractTerm?: string;
  compensation?: string;
  compensationOther?: string;
}

export interface ResourceCreationAttributes extends Optional<ResourceAttributes, "availability" | "whenToContact" | "howToContact" | "howToContactOther" | "workStatus" | "contractTerm" | "compensation" | "compensationOther"> { }

export interface DonationAttributes {
  donationFrequency?: string;
  donationFrequencyOther?: string;
  donationAmount?: string;
  donationAmountOther?: string;
  donationMethod?: string;
  donationMethodOther?: string;
  donationNotes?: string;
  donorLiaison?: string;
}

export interface DonationCreationAttributes extends Optional<DonationAttributes, "donationFrequency" | "donationFrequencyOther" | "donationAmount" | "donationAmountOther" | "donationMethod" | "donationMethodOther" | "donationNotes" | "donorLiaison"> { }

export interface GrantAttributes {
  id: number;
  grantName: string;
  grantAmount?: string;
  grantNotes?: string;
}

export interface GrantCreationAttributes extends Optional<GrantAttributes, "grantAmount" | "grantNotes"> { }

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
}

export interface EventCreationAttributes extends Optional<EventAttributes, "eventDate" | "eventNotes" | "eventCoordinator" | "eventCoordinatorOther" | "eventMembers" | "eventFrequency"> { }

export interface GroupAttributes {
  id: number;
  groupName: string;
  groupNotes?: string;
  groupCoordinator?: string;
  groupCoordinatorOther?: string;
  groupMembers?: string;
}


export interface GroupCreationAttributes extends Optional<GroupAttributes, "groupNotes" | "groupCoordinator" | "groupCoordinatorOther" | "groupMembers"> { }

export interface TeamAttributes {
  id: number;
  teamName: string;
  teamNotes?: string;
  teamCoordinator?: string;
  teamCoordinatorOther?: string;
  teamMembers?: string;
}

export interface TeamCreationAttributes extends Optional<TeamAttributes, "teamNotes" | "teamCoordinator" | "teamCoordinatorOther" | "teamMembers"> { }

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
}

export interface ScheduleCreationAttributes extends Optional<ScheduleAttributes, "scheduleAvailability" | "scheduleAvailabilityOther" | "scheduleFrequency" | "scheduleFrequencyOther" | "scheduleNotes" | "scheduleCoordinator" | "scheduleCoordinatorOther"> { }

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
}

export interface PropertyCreationAttributes extends Optional<PropertyAttributes, "propertyAddress2" | "propertyNotes" | "propertyCoordinator" | "propertyCoordinatorOther"> { }

export interface TaskAttributes {
  id: number;
  taskName: string;
  taskNotes?: string;
  taskCoordinator?: string;
  taskCoordinatorOther?: string;
  taskStatus: string;
  taskMembers?: string;
  taskFrequency?: string;
}

export interface TaskCreationAttributes extends Optional<TaskAttributes, "taskNotes" | "taskCoordinator" | "taskCoordinatorOther" | "taskMembers" | "taskFrequency"> { }

export interface OrganizationAttributes {
  id: number;
  organizationName: string;
  organizationType: string;
  organizationTypeOther?: string;
  organizationNotes?: string;
  organizationCoordinator?: string;
  organizationCoordinatorOther?: string;
  organizationMembers?: string;
}

export interface OrganizationCreationAttributes extends Optional<OrganizationAttributes, "organizationTypeOther" | "organizationNotes" | "organizationCoordinator" | "organizationCoordinatorOther" | "organizationMembers"> { }

export interface PackageAttributes {
  packageNeeds?: string;
  packageTimeToReach?: string;
  packageEmergencyContact?: string;
  packageEmergencyContactPhone?: string;
  packageEmergencyContactEmail?: string;
  packageEmergencyContactRelationship?: string;
  packageNotes?: string;
  packageStatus: string;
}

export interface PackageCreationAttributes extends Optional<PackageAttributes, "packageNeeds" | "packageTimeToReach" | "packageEmergencyContact" | "packageEmergencyContactPhone" | "packageEmergencyContactEmail" | "packageEmergencyContactRelationship" | "packageNotes"> { }

export interface LeadAttributes {
  id: number;
  leadName: string;
  leadDetails?: string;
  leadNotes?: string;
  leadStatus: string;
  leadCoordinator?: string;
  leadCoordinatorOther?: string;
  leadMembers?: string;
}

export interface LeadCreationAttributes extends Optional<LeadAttributes, "leadDetails" | "leadNotes" | "leadCoordinator" | "leadCoordinatorOther" | "leadMembers"> { }

