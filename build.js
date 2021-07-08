const path = require('path');
const fs = require('fs');
const CopyDir = require('copy-dir');

const distPath = path.join(__dirname, 'dist');
const srcPath = path.join(__dirname, 'src');

function clearDistIfNotExist() {
  if(!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath);
  }
}

async function copyAllFilesFromSrc() {
  CopyDir.sync(srcPath, distPath);
}


copyAllFilesFromSrc();

