import supertest from 'supertest';

import Paths from '@src/common/Paths';
import TreeNode, { INode } from '@src/models/TreeNode';
import TreeRepo from '@src/repos/TreeRepo';
import app from '@src/server';

import { cleanDatabase, TRes } from 'spec/support';
import HttpStatusCodes from '@src/common/HttpStatusCodes';

const DB_NODES = [
  TreeNode.new({
    id: 400380983909,
    parentId: -1,
    label: 'root',
    created: new Date('2025-03-22T05:14:36.252Z'),
  }),
  TreeNode.new({
    id: 136437831923,
    parentId: 400380983909,
    label: 'bear',
    created: new Date('2025-03-23T05:14:36.252Z'),
  }),
  TreeNode.new({
    id: 406405373860,
    parentId: 136437831923,
    label: 'cat',
    created: new Date('2025-03-23T05:14:36.252Z'),
  }),
  TreeNode.new({
    id: 994931052432,
    parentId: 400380983909,
    label: 'frog',
    created: new Date('2025-03-24T19:00:44.601Z'),
  }),
] as const;

describe('TreeRouter', () => {
  const agent = supertest.agent(app);
  let dbNodes: INode[] = [];

  beforeEach(async () => {
    await cleanDatabase();
    dbNodes = await TreeRepo.insertMult(DB_NODES);
  });

  describe(`"GET:${Paths.Tree.Base}"`, () => {
    it('should return a JSON object with the entire tree structure', (done) => {
      agent.get('/api/tree').end((_, res: TRes<{ tree: INode[] }>) => {
        expect(res.status).toBe(HttpStatusCodes.OK);
        done();
      });
    });
  });

  describe(`"POST:${Paths.Tree.Base}"`, () => {
    it(
      `should return a status code of "${HttpStatusCodes.CREATED}" if the ` +
        'request was successful.',
      (done) => {
        agent
          .post('/api/tree')
          .send({
            parentId: 406405373860,
            label: 'cat child',
          })
          .end((_, res) => {
            expect(res.status).toBe(HttpStatusCodes.CREATED);
            done();
          });
      }
    );
  });
});
