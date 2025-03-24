import { NodeEntity } from '@src/models/Tree';
import TreeRepo from '@src/repos/TreeRepo';

async function getTree(): Promise<NodeEntity[]> {
  const nodes = await TreeRepo.getNodes();

  const nodeMap = new Map<NodeEntity['id'], NodeEntity>();
  const defaultNode: NodeEntity = {
    id: -1,
    label: '',
    children: [],
  };

  nodes.forEach((node) => {
    nodeMap.set(node.id, {
      id: node.id,
      label: node.label,
      children: [],
    });
  });

  const rootNodes: NodeEntity[] = [];

  nodes.forEach((node) => {
    if (node.parentId < 0 && nodeMap.has(node.id)) {
      rootNodes.push(nodeMap.get(node.id) ?? defaultNode);
    } else if (nodeMap.has(node.parentId)) {
      (nodeMap.get(node.parentId) ?? defaultNode).children.push(
        nodeMap.get(node.id) ?? defaultNode
      );
    }
  });

  return rootNodes;
}

export default {
  getTree,
} as const;
