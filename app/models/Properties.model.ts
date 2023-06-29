import { Model, Column, Table, DataType } from 'sequelize-typescript';
import type { PropertyAttributes, PropertyCreationAttributes } from './Interfaces';

@Table({
  timestamps: true,
  tableName: 'Properties'
})
export class Property extends Model<PropertyAttributes, PropertyCreationAttributes> implements PropertyAttributes {
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
  propertyState!: string;
  propertyZip!: string;
  propertyCountry!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  propertyNotes?: string;
  propertyCoordinator?: string;
  propertyCoordinatorOther?: string;
}

