const fs = require('fs');

/**
 * checks if file exists
 *  @param {string} file file path
 *  @return {Promise} Promise that resolves to true or false
 */
function fileExists(file) {
  return new Promise(resolve => {
    fs.access(file, err => resolve(!err));
  });
}

module.exports = fileExists;
