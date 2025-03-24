import HttpStatusCodes from '@src/common/HttpStatusCodes';
import { IReq, IRes, parseReq } from './common';
import TreeService from '@src/services/TreeService';
import TreeNode from '@src/models/TreeNode';

const Validators = {
  add: parseReq({ node: TreeNode.test }),
} as const;

async function getAll(_: IReq, res: IRes) {
  const tree = await TreeService.getTree();
  res.status(HttpStatusCodes.OK).json({ tree });
}

async function add(req: IReq, res: IRes) {
  const newNode = TreeNode.new(req.body);
  const { node } = Validators.add({ node: newNode });
  await TreeService.addNode(node);
  res.status(HttpStatusCodes.CREATED).end();
}

function delete_(_: IReq, res: IRes) {
  res.status(HttpStatusCodes.OK).end();
}

export default {
  getAll,
  add,
  delete_,
} as const;
