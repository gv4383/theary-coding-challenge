import { INode } from '@src/models/Tree';
import TreeRepo from '@src/repos/TreeRepo';

function getTree(): Promise<INode[]> {
  return TreeRepo.getNodes();
}

export default {
  getTree,
} as const;
