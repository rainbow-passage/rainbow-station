import { Scheduler } from '~/models/Schedulers.model';

export const getSchedulers = async (params: any): Promise<Scheduler[]> => {
  return await Scheduler.findAll(params);
};

export const getSchedulerById = async (id: number): Promise<Scheduler | null> => {
  return await Scheduler.findByPk(id);
};

export const createScheduler = async (data: Scheduler): Promise<Scheduler> => {
  return await Scheduler.create(data);
};

export const updateScheduler = async (id: number, data: Partial<Scheduler>): Promise<[number, Scheduler[]]> => {
  return await Scheduler.update(data, {
    where: { id },
    returning: true,
  });
};

export const deleteScheduler = async (id: number): Promise<number> => {
  return await Scheduler.destroy({
    where: { id },
  });
};

