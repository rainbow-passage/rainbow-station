import { Model, ForeignKey, Table } from 'sequelize-typescript';
import { Event } from '~/models/Events.model';
import { Volunteer } from '~/models/Volunteers.model';
import { Employee } from '~/models/Employees.model';
import { Client } from '~/models/Clients.model';
import { Donor } from '~/models/Donors.model';
import { Property } from '~/models/Properties.model';
import { EventMemberAttributes, EventMemberCreationAttributes } from './Interfaces';

@Table({
  tableName: 'EventVolunteers',
  timestamps: false,
})
export class EventMembers extends Model<EventMemberAttributes, EventMemberCreationAttributes> implements EventMemberAttributes {
  @ForeignKey(() => Event)
  eventId!: number;

  @ForeignKey(() => Volunteer)
  volunteerId?: number;

  @ForeignKey(() => Employee)
  employeeId?: number;

  @ForeignKey(() => Client)
  clientId?: number;
  
  @ForeignKey(() => Donor)
  donorId?: number;

  @ForeignKey(() => Property)
  propertyId?: number;
}