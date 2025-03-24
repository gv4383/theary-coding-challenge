export interface INode {
  id: number;
  parentId: number;
  label: string;
  created: Date;
}

export interface NodeEntity {
  id: number;
  label: string;
  children: NodeEntity[];
}

const DEFAULT_NODE_VALS = (): INode => ({
  id: -1,
  parentId: -1,
  label: '',
  created: new Date(),
});

function newTreeNode(node?: Partial<INode>): INode {
  return { ...DEFAULT_NODE_VALS(), ...node };
}

export default {
  new: newTreeNode,
} as const;
