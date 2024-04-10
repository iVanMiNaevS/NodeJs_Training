const fs = require("fs")
const path = require("path")

// function text(){
//     let str = ""
//     for (let index = 0; index < 100000; index++) {
//         str+= "data123 "
//     }
//     return str
// }

// fs.writeFile(path.resolve("text.txt"), text(), (err)=>{
//     if(err){
//         console.log(err);
//     }
// })

// fs.readFile(path.resolve("text.txt"),(err, data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data);
// })

// const stream = fs.createReadStream(path.resolve("text.txt"));
// stream.on("open", ()=>{
//     console.log("open");
// })
// stream.on("data", (chunk)=>{
//     console.log(chunk);
// })
// stream.on("end", ()=>{
//     console.log("end");
// })
// stream.on("error", (e)=>{
//     console.log(e);
// })

const stream = fs.createWriteStream(path.resolve("text.txt"))

for (let i = 0; i < 20; i++) {
    stream.write(i + "\n")   
     
}