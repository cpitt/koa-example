/**
 * Config for the images module
 */
const path = require('path');

module.exports = {
  imagePaths: {
    original:
      process.env.IMAGE_RESIZER_ORIGINAL_PATH ||
      path.resolve(__dirname, './static/images/original'),
    resized:
      process.env.IMAGE_RESIZER_RESIZED_PATH ||
      path.resolve(__dirname, './static/images/resized'),
  },
};
