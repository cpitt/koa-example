const listFiles = require('../utils/listFiles');

/**
 * create a listFiles controller
 * @param {string} path directory to list images
 * @return {function} configured listFiles controller
 */
function createListImagesController(path) {
  return async ctx => {
    const files = await listFiles(path, {
      permittedExtensions: ['.jpg', '.jpeg', '.gif', '.png'],
    });
    ctx.body = {
      count: files.length,
      files,
    };
  };
}

module.exports = createListImagesController;
