import type { ClientAttributes, ClientCreationAttributes } from "~/models/Clients.model";
// write a seed file for sequelize to seed the Client Model

// create an array of client data

export const clientData: ClientAttributes & ClientCreationAttributes = {
  id: 1,
  honorific: "Mx.",
  pronouns: "It/Its",
  firstName: "Ren",
  middleName: "Janice",
  lastName: "Castle",
  email: "abc@123.com",
  phone: "(440) 555-5555",
  address: "123 Main St West",
  address2: "Apt #345",
  city: "Anytown",
  state: "Ohio",
  zip: "44123-1234",
  country: "USA",
  birthDate: new Date(2001, 8, 8),
  packageNeeds: "Needs",
  packageStatus: "In Transit",
  website: "https://webs.com",
  facebook: "https://facebook.com",
  twitter: "https://twitter.com",
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com",
  youtube: "https://youtube.com",
  tiktok: "https://tiktok.com",
  github: "https://github.com",
  discord: "https://discord.com",
  slack: "https://slack.com",
  packageTimeToReach: "Midday",
  packageEmergencyContact: "Mom",
  packageEmergencyContactPhone: "(216) 555-5555",
  packageEmergencyContactEmail: "mom@moms.com",
  packageEmergencyContactRelationship: "Dad",
  packageNotes: "None",
}