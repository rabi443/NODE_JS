const fs = require('fs');

//to rename the file
// fs.rename('rabinRenamed.txt', 'rabinAsync.txt', (err) => {
//     if (err) {
//         console.error('Error renaming file:', err);
//     } else { 
//         console.log('File renamed successfully!');
//     }        
// });

//to rename the file synchronously
fs.renameSync('rabinAsync.txt', 'rabinRenamed.txt');
console.log('File renamed synchronously successfully!');
