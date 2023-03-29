const http = require('http');
 const servidor  = http.createServer(function (req, resp) {
    resp.end(`
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Ultima School </h1>
                <h2> Bem-vindos ao nosso site! </h2> 
            </body> 
        </html>
    `);
 });
 servidor.listen(3000);