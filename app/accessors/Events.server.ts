import { Event } from "~/models/Events.model";}

export const getEvents = async (params: any): Promise<Event[]> => {
  return await Event.findAll(params);
};

export const getEventById = async (id: number): Promise<Event | null> => {
  return await Event.findByPk(id);
};

export const createEvent = async (data: Event): Promise<Event> => {
  return await Event.create(data);
};

export const updateEvent = async (id: number, data: Partial<Event>): Promise<[number, Event[]]> => {
  return await Event.update(data, {
    where: { id },
    returning: true,
  });
};

export const deleteEvent = async (id: number): Promise<number> => {
  return await Event.destroy({
    where: { id },
  });
}; Event