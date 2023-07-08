import { Optional } from "sequelize";

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
  twitch?: string;
  medium?: string;
  slack?: string;
}

export interface SocialCreationAttributes extends Optional<SocialAttributes, "website" | "facebook" | "twitter" | "instagram" | "linkedin" | "youtube" | "tiktok" | "github" | "discord" | "twitch" | "medium" | "slack"> { }
