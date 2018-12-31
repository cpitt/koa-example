const Router = require('koa-router');
const controllers = require('./controllers');
const { imagePaths } = require('./config');

const router = new Router();

router.get('/original', controllers.listImages(imagePaths.original));
router.get('/original/:imageName', controllers.getImage(imagePaths.original));
router.post('/resized', controllers.resizeImage);
router.get('/resized', controllers.listImages(imagePaths.resized));
router.get('/resized/:imageName', controllers.getImage(imagePaths.resized));

module.exports = router;
