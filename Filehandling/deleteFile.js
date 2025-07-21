const fs = require('fs');

//to delete the file
fs.unlink('rabin.txt', (err) => {  
    if (err) {
        console.error('Error deleting file rabin.txt :', err);
    } else {
        console.log('File rabin.txt deleted successfully!');
    }    
});

//to delete the file synchronously
// fs.unlinkSync('rabin.txt');
// console.log('File deleted synchronously successfully!');
