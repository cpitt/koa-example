/**
 * Configures the koa application
 * Can be served or loaded as a module into another service
 *
 */
const Koa = require('koa');
const router = require('./router.js');
const middleware = require('./middleware');

const app = new Koa();

app.use(middleware);
app.use(router.routes());

module.exports = app;
