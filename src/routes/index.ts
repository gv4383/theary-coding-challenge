import { Router } from 'express';

import Paths from '../common/Paths';
import TreeRoutes from './TreeRoutes';

/******************************************************************************
                                Variables
******************************************************************************/

const apiRouter = Router();

// Init router
const treeRouter = Router();

treeRouter.get(Paths.Tree.Get, TreeRoutes.getAll);
treeRouter.post(Paths.Tree.Get, TreeRoutes.add);
treeRouter.delete(Paths.Tree.Get, TreeRoutes.delete_);

// Add TreeRouter
apiRouter.use(Paths.Tree.Base, treeRouter);

/******************************************************************************
                                Export default
******************************************************************************/

export default apiRouter;
