const path = require('path');
const Boom = require('boom');
const fileExists = require('../utils/fileExists');
const resizeImage = require('../utils/resizeImage');
const { imagePaths } = require('../config.js');

async function resizeImageController(ctx) {
  const { imageName, resizeOptions } = ctx.request.body;

  if (!imageName) {
    throw Boom.badRequest('request body must contain valid imageName');
  }

  const originalImagePath = path.resolve(imagePaths.original, imageName);
  if (!(await fileExists(originalImagePath))) {
    throw Boom.badRequest(`${imageName} is not a valid original image`);
  }

  if (!resizeOptions || (!resizeOptions.width && !resizeOptions.height)) {
    throw Boom.badRequest(
      'body.resizeOptions must be present and contain width or height',
    );
  }

  ctx.body = await resizeImage(
    originalImagePath,
    imagePaths.resized,
    resizeOptions,
  );
}

module.exports = resizeImageController;
