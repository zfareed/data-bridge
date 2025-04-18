const fs = require('fs');
const path = require('path');

// Get current timestamp
const timestamp = new Date().toISOString();

// Append to data.txt
const filePath = path.join(__dirname, 'data.txt');
fs.appendFileSync(filePath, `${timestamp}\n`);

console.log('✅ Timestamp added:', timestamp);
