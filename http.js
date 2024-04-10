// const http = require("http");

// const PORT = 5000

// const server = http.createServer((req, res)=>{
//     // res.writeHead(200,{
//     //     "Content-type": "text/html;"
//     // })
//     res.writeHead(200, {
//         "Content-type": "application/json"
//     })
//     if(req.url === "/users"){
//         res.end(JSON.stringify([
//             {id:1, name:"Ivan"}
//         ]))
//     }
//     res.end(req.url)
// })


// server.listen(PORT, ()=>{console.log("сервер запущен на порте "+PORT)})