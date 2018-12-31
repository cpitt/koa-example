const fs = require('fs');

function bufferToFile(file, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, err => {
      if (err) {
        return reject(err);
      }
      return resolve();
    });
  });
}

module.exports = bufferToFile;
