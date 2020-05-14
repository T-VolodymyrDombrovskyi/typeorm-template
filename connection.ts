import {
  Connection,
  ConnectionOptions,
  createConnection,
  Repository,
} from 'typeorm';

import { database } from './config';

let connection: Connection | undefined;

export async function getRepositoryByModel<TEntity>(
  model: any
): Promise<Repository<TEntity>> {
  if (!connection) {
    connection = await createConnection(database);
  }

  return connection.getRepository<TEntity>(model);
}

export async function getConnection(): Promise<Connection> {
  if (!connection) {
    connection = await createConnection(database);
  }

  return connection;
}
