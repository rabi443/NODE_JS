const fs = require('fs');

//to get the file stats
const stats = fs.statSync('Rabin.txt');      
console.log('File stats:', stats);

//to get the file stats asynchronously
// fs.stat('rabinRenamed.txt', (err, stats) => {        
//     if (err) {
//         console.error('Error getting file stats:', err);
//     } else {
//         console.log('Asynchronous file stats:', stats);
//     }
// });
