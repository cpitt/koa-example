const Router = require('koa-router');
const controllers = require('./controllers');

const router = new Router();

router.get('/', controllers.listImages);
router.get('/:imageName', controllers.getImage);
router.get('/:imageName/resize', controllers.resizeImage);

module.exports = router;
