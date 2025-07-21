const http = require('http');
// const fs = require('fs');
// const url = require('url');

// const myserver = http.createServer((req, res) => {
//     if (req.url === '/favicon.ico') {
//         res.writeHead(204); // No Content
//         res.end();
//         return;
//     }
//     const log = `Time: ${Date.now()} ${req.url} New Request Received \n`;
//     const myUrl = url.parse(req.url, true);
//     console.log('Request received for URL:', myUrl.pathname);

//     fs.appendFile('log.txt', log, (err, data) =>{
//         switch (myUrl.pathname) {
//             case '/':
//                 res.end('Welcome to the Home Page!\n');
//                 break;
//             case '/about':
//                 const name = myUrl.query.my_name || 'Guest';
//                 res.end(`Hello, ${name}! Welcome to the About Page!\n`);
//                 break;
//             case '/contact':
//                 res.end('Welcome to the Contact Page!\n');
//                 break;
//             default:
//                 res.writeHead(404, {'Content-Type': 'text/plain'});
//                 res.end('404 Not Found\n');
//         } 
//     }); 
// });

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    return res.send('Welcome to the Home Page!');  
});

app.get('/about', (req, res) => {
    const name = req.query.my_name || 'Guest';
    return res.send(`Hello, ${name}! Welcome to the About Page!`);
});

app.listen(8000, () => {
    console.log('Server is running on http://localhost:8000');
});