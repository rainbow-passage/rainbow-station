import { TaskCreationAttributes } from '~/interfaces';
import { Task } from '~/models/Tasks.model';

export const getTasks = async (params: any): Promise<Task[]> => {
  return await Task.findAll(params);
};

export const getTaskById = async (id: number): Promise<Task | null> => {
  return await Task.findByPk(id);
};

export const createTask = async (data: TaskCreationAttributes): Promise<Task> => {
  return await Task.create(data);
};

export const updateTask = async (id: number, data: Partial<Task>): Promise<[number, Task[]]> => {
  return await Task.update(data, {
    where: { id },
    returning: true,
  });
};

export const deleteTask = async (id: number): Promise<number> => {
  return await Task.destroy({
    where: { id },
  });
};

