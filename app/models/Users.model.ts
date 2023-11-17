import { Model, Column, Table, DataType, Index, IsUUID, Length, NotContains, IsEmail, IsUrl } from 'sequelize-typescript';
import type { UserAttributes, UserCreationAttributes } from '~/interfaces';

@Table({
  tableName: 'Users',
})
export default class Users extends Model<UserAttributes, UserCreationAttributes> {
  @Column(DataType.INTEGER)
  id!: number;

  @Index
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  username!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;

  @Index
  @IsEmail
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  profilePicture?: string;

  @Column
  pronouns?: string;

  @Column
  name?: string;

  @Column
  bio?: string;

  @Column
  birthDate?: Date;
}