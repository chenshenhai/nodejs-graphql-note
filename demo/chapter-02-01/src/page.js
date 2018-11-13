const fs = require('fs');
const path = require('path');

function page(pagePath) {
  let result = '404 Not Found';
  if (typeof pagePath === 'string') {
    const filePath = path.join(__dirname, 'view', pagePath);
    if (fs.existsSync(filePath)) {
      result = fs.readFileSync(filePath, 'binary');
    }
  }
  return result;
}

module.exports = page;