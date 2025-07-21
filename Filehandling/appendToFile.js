const fs = require('fs');

//to append the file
fs.appendFile('rabin.txt', '\nThis is an appended line.', (err) => {
    if (err) {
        console.error('Error appending file:', err);
    } else {
        console.log('File appended successfully!');
    }
});

//to append the file synchronously
// fs.appendFileSync('rabin.txt', '\nThis is an appended line synchronously.');
// console.log('File appended synchronously  to rabin.txt successfully!');