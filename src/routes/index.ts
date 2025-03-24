import { Router } from 'express';

import Paths from '../common/Paths';
import TreeRoutes from './TreeRoutes';
import UserRoutes from './UserRoutes';

/******************************************************************************
                                Variables
******************************************************************************/

const apiRouter = Router();

// ** Add UserRouter ** //

// Init routers
const userRouter = Router();
const treeRouter = Router();

// Get all users
userRouter.get(Paths.Users.Get, UserRoutes.getAll);
userRouter.post(Paths.Users.Add, UserRoutes.add);
userRouter.put(Paths.Users.Update, UserRoutes.update);
userRouter.delete(Paths.Users.Delete, UserRoutes.delete);

treeRouter.get(Paths.Tree.Get, TreeRoutes.getAll);
treeRouter.post(Paths.Tree.Get, TreeRoutes.add);
treeRouter.delete(Paths.Tree.Get, TreeRoutes.delete_);

// Add UserRouter
apiRouter.use(Paths.Users.Base, userRouter);
apiRouter.use(Paths.Tree.Base, treeRouter);

/******************************************************************************
                                Export default
******************************************************************************/

export default apiRouter;
