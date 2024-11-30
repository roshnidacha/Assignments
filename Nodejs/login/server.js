const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');


const validUsername = "username";
const validPassword = "password";

http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);


    if (parsedUrl.pathname === "/") {

        fs.readFile('login.html', 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write("Error loading the page.");
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            }
        });
    }


    else if (parsedUrl.pathname === "/login" && req.method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            const postData = querystring.parse(body);
            const username = postData.username;
            const password = postData.password;


            if (username === validUsername && password === validPassword) {

                res.writeHead(302, { 'Location': '/welcome' });
                res.end();
            } else {

                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('<h1>Invalid username or password. Please try again.</h1>');
                res.end();
            }
        });
    }

    else if (parsedUrl.pathname === '/welcome') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Welcome to the Application!</h1>');
        res.end();
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('404 Not Found');
        res.end();
    }
}).listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});