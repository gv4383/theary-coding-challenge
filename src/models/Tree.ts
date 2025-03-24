export interface INode {
  id: number;
  parentId: number;
  label: string;
  children: INode[];
  created: Date;
}

const DEFAULT_NODE_VALS = (): INode => ({
  id: -1,
  parentId: -1,
  label: '',
  children: [],
  created: new Date(),
});

function newTreeNode(node?: Partial<INode>): INode {
  return { ...DEFAULT_NODE_VALS(), ...node };
}

export default {
  new: newTreeNode,
} as const;
