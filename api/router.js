const Router = require('koa-router');

const imageRouter = require('./modules/image-resizer/router');

const router = new Router();

router.use('/images', imageRouter.routes());
module.exports = router;
