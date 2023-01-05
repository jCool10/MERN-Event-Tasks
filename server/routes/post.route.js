import express from 'express';
import tokenMiddleware from '../middlewares/token.middleware.js';
import postController from '../controllers/post.controller.js';

const router = express.Router();

router.post('/', tokenMiddleware.auth, postController.create);
router.get('/', tokenMiddleware.auth, postController.get);
router.put('/:postId', tokenMiddleware.auth, postController.update);
router.delete('/:postId', tokenMiddleware.auth, postController.remove);

export default router;
