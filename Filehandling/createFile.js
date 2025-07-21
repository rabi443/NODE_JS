const fs = require('fs');

// Synchronous file write
fs.writeFileSync('rabin.txt', 'Rabin Kumar chaudhary! welcome to Node.js Synchronous file handling.');

//Asynchronous file write
fs.writeFile('rabinAsync.txt', 'Rabin Kumar chaudhary! welcome to Node.js Asynchronous file handling.', (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File written successfully!');
    }
});