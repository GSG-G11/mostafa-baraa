const http = require('http');
const fs = require('fs');
const path= require('path');

const message = 'I am so happy to be part of the Node Girls workshop!';

const server = http.createServer((request, response)=>{
    const endpoint = request.url;

    if(endpoint === '/') {
        const filePath = path.join(__dirname,'..','public','index.html');
        fs.readFile(filePath, (error, file) => {
            console.log(filePath)
          if (error) {
            console.log(error);
            response.end("mosasas")
            return;
          } else {
            response.writeHead(200, { 'Content-Type': 'text/html' })
            response.end(file);
          }
        })

      }
      else if ( endpoint === "/main.css"){
        const filePath = path.join(__dirname,'..','public','main.css');
        fs.readFile(filePath, (error, data) => {
            console.log(filePath)
          if (error) {
            console.log(error);
            response.end("mosasas")
            return;
          } else {
            response.writeHead(200, { 'Content-Type': 'text/css' })
            response.end(data);
          }
        })

      }
      else if (endpoint === "/img/image.jpg"){
        const filePath = path.join(__dirname,'..','public','img','image.jpg');
        fs.readFile(filePath, (error, data) => {
            console.log(filePath)
          if (error) {
            console.log(error);
            response.end("mosasas")
            return;
          } else {
            response.writeHead(200, { 'Content-Type': 'image/png' })
            response.end(data);
          }
        })

      }
      else {
          response.writeHead(404)
          response.end("not found")
      } 
    // console.log(endpoint);
//     if( endpoint === "/girls"){
//         response.write("girl")
//         response.end('mostafa')
//     }
//         else if (endpoint === "/node"){
//             response.write('node')
//             response.end('baraa')


//     }
//     const method = request.method;
//     console.log(method);

//     response.writeHead(200, {"Content-Type": "text/html"});
//     response.write(message); 
//     response.end(); 
});

const port = 3000
server.listen(port, () => {
    console.log(`Server is listening on port ${port}.  Ready to accept requests!`);
  });