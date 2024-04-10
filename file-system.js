const fs = require("fs")
const path = require("path")
// fs.mkdir(path.join(__dirname, "mydir"), (err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("tttt");
// })


async function myWriteFile( path,text){
    return new Promise((resolve,reject)=>{
        fs.writeFile(path,text,(err)=>{
            if(err){
                reject(err);
            }
            resolve()
        })
    })
}

async function myRemoveFile(path){
    return new Promise((resolve,reject)=>{
        fs.rm(path,(err)=>{
            if(err){
                reject(err);
            }
            resolve()
        })
    })
}
async function myReadFile(path){
    return new Promise((resolve,reject)=>{
        fs.readFile(path,{encoding: "utf-8"},(err, data)=>{
            if(err){
                reject(err);
            }
            resolve(data)
        })
    })
}

const text = "dog cat lion"

const path1 = path.join(__dirname, "text.txt")
const path2 = path.join(__dirname, "count.txt")

myWriteFile(path1, text)
    .then(()=>myReadFile(path1))
    .then((text)=>text.split(" ").length)
    .then((count)=>myWriteFile(path2, `count = ${count}`))
    .then(()=>{myRemoveFile(path1)})
    .catch((err)=> console.log(err.message))