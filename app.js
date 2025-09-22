const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;

   if(url === '/') {
   res.write('<html>');
   res.write('<head><title>Message Page</title></head>');
   res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button>Send</button></form></body>');
   res.write('</html>');
   return res.end();
   }else if (url === '/index') {
   res.write('<html>');
   res.write('<head><title>Index Page</title></head>');
   res.write('<body><p>The routing was executed and arrived properly</p></body>');
   res.write('</html>');
   return res.end();

   }

   res.setHeader('Content-Type', 'text/html'); 
   res.write('</html>');
   res.write('<head><title>My First Page</title></head>');
   res.write('<body><h1>Hello Mr KGOBE from my Node.js server!</h1></body>');
   res.write('</html>');
   res.end();

});

server.listen(3000);
console.log('Server is listening on port 3000');
