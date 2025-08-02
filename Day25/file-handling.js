const fs = require('fs');

// Read a File
fs.readFile('info.txt', 'utf8', (err, data) => {
  if (err) return console.error('Read Error:', err);
  console.log('File Content:', data);
});

// Write to a File
fs.writeFile('notes.txt', 'Learning Node.js File System!', (err) => {
  if (err) return console.error('Write Error:', err);
  console.log('File Created and Written');
});

// Append to a File
fs.appendFile('notes.txt', '\nAppended: It is very powerful.', (err) => {
  if (err) return console.error('Append Error:', err);
  console.log('Text Appended');
});

// Delete a File
fs.unlink('old.txt', (err) => {
  if (err) return console.error('Delete Error:', err);
  console.log('File Deleted');
});

// Rename a File
fs.rename('info.txt', 'details.txt', (err) => {
  if (err) return console.error('Rename Error:', err);
  console.log('File Renamed');
});

// Create a Directory
fs.mkdir('project-files', (err) => {
  if (err) return console.error('Mkdir Error:', err);
  console.log('Directory Created');
});

// Remove a Directory
fs.rm('project-files', { recursive: true }, (err) => {
  if (err) return console.error('Rm Error:', err);
  console.log('Directory Removed');
});

// Read Directory Contents
fs.readdir('.', (err, files) => {
  if (err) return console.error('Readdir Error:', err);
  console.log('Files in Current Directory:', files);
});

// Get File Stats
fs.stat('details.txt', (err, stats) => {
  if (err) return console.error('Stat Error:', err);
  console.log('File Stats:', stats);
});

// Copy a File
fs.copyFile('details.txt', 'backup.txt', (err) => {
  if (err) return console.error('Copy Error:', err);
  console.log('File Copied');
});
