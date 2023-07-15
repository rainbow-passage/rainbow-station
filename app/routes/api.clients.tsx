// api/clients.js

import { json, LoaderFunction } from '@remix-run/node';
import { Client, ClientCreationAttributes } from '../models/Clients.model';
import { ClientAttributes } from '~/models/Clients.model';

export const routes = {
  '/api/clients': async () => {
    const clients = await Client.findAll();
    return json(clients);
  },
  '/api/clients/:id': async ({ params }: { params: any }) => {
    const { id } = params;
    const client = await Client.findByPk(id);

    if (!client) {
      return json({ error: 'Client not found' }, { status: 404 });
    }

    return json(client);
  },
  '/api/createClient': async (request: any) => {
    const body = new URLSearchParams(await request.text());
    const client: Client = await Client.create(Object.fromEntries(body));
    return json(client, { status: 201 });
  },
  '/api/updateClient/:id': async (request: any) => {
    const { id } = request.params;
    const client = await Client.findByPk(id);

    if (!client) {
      return json({ error: 'Client not found' }, { status: 404 });
    }

    const body = new URLSearchParams(await request.text());
    await client.update(body);
    return json(client);
  },
  '/api/deleteClient/:id': async (request: any) => {
    const { id } = request.params;
    const client = await Client.findByPk(id);

    if (!client) {
      return json({ error: 'Client not found' }, { status: 404 });
    }

    await client.destroy();
    return json({ message: 'Client deleted successfully' });
  },
};

export const loader: LoaderFunction = async ({ request }) => {
  const handler = routes[request.url];

  if (handler) {
    return handler(request);
  }

  return json({ error: 'Route not found' }, { status: 404 });
};

