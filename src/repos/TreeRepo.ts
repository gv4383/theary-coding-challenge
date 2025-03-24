import { INode } from '@src/models/TreeNode';

import orm from './MockOrm';
import { getRandomInt } from '@src/util/misc';

async function getNodes(): Promise<INode[]> {
  const db = await orm.openDb();
  return db.tree;
}

async function add(node: INode): Promise<void> {
  const db = await orm.openDb();
  node.id = getRandomInt();
  db.tree.push(node);
  return orm.saveDb(db);
}

export default {
  getNodes,
  add,
} as const;
