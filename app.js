const http = require('http');
const server=http.createServer((req, res) => {
    res.writeHead(200,{ 'Content-Type': 'text/plain'});
    res.end('Hello Worl from Ec2');
});

server.listen(3000,() => {
   console.log('Server listening to 3000');
});
