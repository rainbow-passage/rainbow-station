import { Model, Column, Table, DataType, Index, IsUUID } from 'sequelize-typescript';
import type { PropertyAttributes, PropertyCreationAttributes } from './Interfaces';

@Table({
  timestamps: true,
  tableName: 'Properties'
})
export class Property extends Model<PropertyAttributes, PropertyCreationAttributes> implements PropertyAttributes {
  @Index
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  propertyName!: string;
  propertyAddress!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  propertyAddress2?: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  propertyCity!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  propertyState!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  propertyZip!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  propertyCountry!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  propertyNotes?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  propertyCoordinator?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  propertyCoordinatorOther?: string;
}

