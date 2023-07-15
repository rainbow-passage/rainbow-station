import { Client, ClientCreationAttributes } from '~/models/Clients.model';

export const getClients = async (params: any): Promise<Client[]> => {
  return await Client.findAll(params);
};

export const getClientById = async (id: number): Promise<Client | null> => {
  return await Client.findByPk(id);
};

export const createClient = async (data: ClientCreationAttributes): Promise<Client> => {
  return await Client.create(data);
};

export const updateClient = async (id: number, data: Partial<Client>): Promise<[number, Client[]]> => {
  return await Client.update(data, {
    where: { id },
    returning: true,
  });
};

export const deleteClient = async (id: number): Promise<number> => {
  return await Client.destroy({
    where: { id },
  });
};

