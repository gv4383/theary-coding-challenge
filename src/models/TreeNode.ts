import { isRelationalKey, transIsDate } from '@src/util/validators';
import { isString } from 'jet-validators';
import { parseObject, TParseOnError } from 'jet-validators/utils';

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

const DEFAULT_TREE_NODE_VALS = (): INode => ({
  id: -1,
  parentId: -1,
  label: '',
  created: new Date(),
});

const parseTreeNode = parseObject<INode>({
  id: isRelationalKey,
  parentId: isRelationalKey,
  label: isString,
  created: transIsDate,
});

function newTreeNode(node?: Partial<INode>): INode {
  return { ...DEFAULT_TREE_NODE_VALS(), ...node };
}

function testTreeNode(arg: unknown, errCb?: TParseOnError): arg is INode {
  return !!parseTreeNode(arg, errCb);
}

export default {
  new: newTreeNode,
  test: testTreeNode,
} as const;
