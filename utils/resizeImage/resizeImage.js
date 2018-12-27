const sharp = require('sharp');
const path = require('path');

function generateOutputFilename(input, width, height) {
  const parsedInput = path.parse(input);
  const outputFilename = `${parsedInput.name}-w${width}-h${height}${
    parsedInput.ext
  }`;
  return outputFilename;
}

/**
 * Resizes image and saves to output dir
 * @param {string} input path to input file
 * @param {outDir} outputDir path to output directory
 * @param {Object} options resize options
 * @param {int} options.width new image width
 * @param {int} options.height new image height
 * @return {string} path to resized image on disk
 */
async function resizeImage(
  input,
  outputDir,
  options = { width: null, height: null },
) {
  const outputFilename = generateOutputFilename(
    input,
    options.width,
    options.height,
  );
  await sharp(input)
    .resize({ ...options, fit: sharp.fit.fill })
    .toFile(path.resolve(outputDir, outputFilename));

  return outputFilename;
}

module.exports = resizeImage;
