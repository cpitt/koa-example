const compose = require('koa-compose');
const errorHandler = require('./errorHandler');

module.exports = compose([errorHandler]);
