// Your code here
const http = require('http');

const responseBody = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World!</title>
    </head>
    <body>
        <h1>Hello there!</h1>
    </body>
    </html>
`

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;
    res.write(responseBody);
    res.end();
});

const port = 5000;

server.listen(port, () => console.log("Server listening on port", port));