const Router = require('koa-router');
const controllers = require('./controllers');

const router = new Router();

router.get('/original', controllers.listImages);
router.get('/original/:imageName', controllers.getImage);
router.get('/resized/:imageName', controllers.resizeImage);

module.exports = router;
