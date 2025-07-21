const fs = require('fs');

//to read the file
const data = fs.readFileSync('rabin.txt', 'utf8');
console.log('Synchronous file rabin.txt  read:', data);

//to read the file asynchronously
fs.readFile('rabinAsync.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('Asynchronous file rabinAsync.txt read:', data);
    }
});