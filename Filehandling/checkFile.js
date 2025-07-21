const fs = require('fs');

//to check if the file exists
if (fs.existsSync('Rebita.txt')) {
    console.log('File exists: Rebita.txt');
}   else {
    console.log('File does not exist: Rebita.txt');
}  