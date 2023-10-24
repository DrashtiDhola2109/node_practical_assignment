const fs = require('fs');
const zlib = require('zlib');
const path = require('path');
const archiver = require('archiver');

function createZipFolder(sourceFolderPath, targetZipPath) {
  // Create a writable stream to the target zip file
  const output = fs.createWriteStream(targetZipPath);

  // Create a new ZIP archive
  const archive = archiver('zip', {
    zlib: { level: 9 }, // Set the compression level (0-9, where 9 is the highest)
  });

  // Listen for errors during archiving
  archive.on('error', (err) => {
    throw err;
  });

  // Pipe the output stream to the archive
  archive.pipe(output);

  // Append the source folder to the archive
  archive.directory(sourceFolderPath, false);

  // Finalize the archive
  archive.finalize();

  // Listen for the 'close' event to know when the archive is finished
  output.on('close', () => {
    console.log(`Successfully created ${path.basename(targetZipPath)} (${archive.pointer()} bytes)`);
  });
}

// Usage example
const sourceFolder = path.join('C:/Users/DELL/OneDrive/Pictures/', 'iphone');
const targetZipFile = path.join('./', 'compressed_folder.zip');

createZipFolder(sourceFolder, targetZipFile);
