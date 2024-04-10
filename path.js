const path = require("path")

const fpath = path.join(__dirname,"first", "second")
console.log(path.resolve());

console.log(path.parse(fpath))



const url = new URL("https://nodejs.org/api/esm.html#require")
console.log(url);