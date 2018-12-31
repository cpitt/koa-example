const compose = require('koa-compose');
const bodyParser = require('koa-bodyparser');
const { logger } = require('koa2-winston');
const errorHandler = require('./errorHandler');

module.exports = compose([errorHandler, bodyParser(), logger()]);
