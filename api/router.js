const Router = require('koa-router');

const imageRouter = require('./modules/images/router');

const router = new Router();

// Add module routes here
router.use('/images', imageRouter.routes());

module.exports = router;
