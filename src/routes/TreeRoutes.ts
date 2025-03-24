import HttpStatusCodes from '@src/common/HttpStatusCodes';
import { IReq, IRes } from './common';

function getAll(_: IReq, res: IRes) {
  res.status(HttpStatusCodes.OK).json({ test: 'Getting tree...' });
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
