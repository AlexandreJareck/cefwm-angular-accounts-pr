import { Application } from 'express';

import { Collection, Db } from 'mongodb';

export function getCollection<T>(
  appOrDb: Application | Db,
  name: string
): Collection<T> {
  if (appOrDb instanceof Db) {
    return appOrDb.collection(name);
  } else {
    return appOrDb.locals.db.collection(name);
  }
}
