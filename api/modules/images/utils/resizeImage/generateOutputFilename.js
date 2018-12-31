const path = require('path');

function generateOutputFilename(input, width, height) {
  const parsedInput = path.parse(input);
  const outputFilename = `${parsedInput.name}-w${width}-h${height}${
    parsedInput.ext
  }`;
  return outputFilename;
}

module.exports = generateOutputFilename;
