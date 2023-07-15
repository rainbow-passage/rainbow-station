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

/*

  // FileRef
  // SocialAttributes in Social.d.ts

  @IsUrl
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  website?: string;

  @IsUrl
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  facebook?: string;

  @IsUrl
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  twitter?: string;

  @IsUrl
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  instagram?: string;

  @IsUrl
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  linkedin?: string;

  @IsUrl
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  youtube?: string;

  @IsUrl
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  tiktok?: string;

  @IsUrl
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  github?: string;

  @Index
  @Column({
    type: DataType.STRING,
    allowNull: true,
    unique: true,
  })
  discord?: string;

  @IsUrl
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  twitch?: string;

  @IsUrl
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  medium?: string;

  @IsUrl
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  slack?: string;
  
*/
