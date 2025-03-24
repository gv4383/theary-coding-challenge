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

async function deleteAllNodes(): Promise<void> {
  const db = await orm.openDb();
  db.tree = [];
  return orm.saveDb(db);
}

async function insertMult(nodes: INode[] | readonly INode[]): Promise<INode[]> {
  const db = await orm.openDb();
  const nodesResult = [...nodes];
  db.tree = [...db.tree, ...nodes];
  await orm.saveDb(db);
  return nodesResult;
}

export default {
  getNodes,
  add,
  deleteAllNodes,
  insertMult,
} as const;
