import { INode, NodeEntity } from '@src/models/TreeNode';
import TreeRepo from '@src/repos/TreeRepo';

async function getTree(): Promise<NodeEntity[]> {
  const nodes = await TreeRepo.getNodes();

  const nodeMap = new Map<NodeEntity['id'], NodeEntity>();
  const defaultNodeEntity: NodeEntity = {
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
      rootNodes.push(nodeMap.get(node.id) ?? defaultNodeEntity);
    } else if (nodeMap.has(node.parentId)) {
      (nodeMap.get(node.parentId) ?? defaultNodeEntity).children.push(
        nodeMap.get(node.id) ?? defaultNodeEntity
      );
    }
  });

  return rootNodes;
}

async function addNode(node: INode): Promise<void> {
  return TreeRepo.add(node);
}

export default {
  getTree,
  addNode,
} as const;
