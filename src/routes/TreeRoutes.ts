import HttpStatusCodes from '@src/common/HttpStatusCodes';
import { IReq, IRes } from './common';
import TreeService from '@src/services/TreeService';

async function getAll(_: IReq, res: IRes) {
  const tree = await TreeService.getTree();
  res.status(HttpStatusCodes.OK).json({ tree });
}

function add(_: IReq, res: IRes) {
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
