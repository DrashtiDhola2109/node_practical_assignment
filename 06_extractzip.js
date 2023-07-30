const AdmZip = require('adm-zip');
const path = require('path');

function extractZip(zipFilePath, destinationPath) {
  try {
    const zip = new AdmZip(zipFilePath);
    zip.extractAllTo(destinationPath, true); // The second argument (overwrite) is set to true to overwrite existing files
    console.log(`Zip file "${path.basename(zipFilePath)}" extracted to "${destinationPath}"`);
  } catch (error) {
    console.error('Error extracting zip:', error.message);
  }
}

// Usage example
const zipFilePath = path.join('./', 'compressed_folder.zip'); // Replace with the path to your zip file
const destinationPath = path.join('./', 'extracted'); // Replace with the desired destination folder

extractZip(zipFilePath, destinationPath);
