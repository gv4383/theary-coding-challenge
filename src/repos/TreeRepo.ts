import { INode } from '@src/models/Tree';

import orm from './MockOrm';

async function getNodes(): Promise<INode[]> {
  const db = await orm.openDb();
  return db.tree;
}

export default {
  getNodes,
} as const;
