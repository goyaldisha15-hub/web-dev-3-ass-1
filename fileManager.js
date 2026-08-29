const fs = require('fs');

// Create
fs.writeFileSync('test.txt', 'Hello Node.js');
console.log("File Created");

// Read
let data = fs.readFileSync('test.txt', 'utf8');
console.log("Reading File:", data);

// Update
fs.appendFileSync('test.txt', '\nLearning FS Module');
console.log("File Updated");

data = fs.readFileSync('test.txt', 'utf8');
console.log(data);

// Delete
fs.unlinkSync('test.txt');
console.log("File Deleted");