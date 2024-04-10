const Application = require("./framework/Application")
const PORT = 5000;
const userRouter = require("./src/user-router")
const jsonParse = require("./framework/parseJson")
const urlParse = require("./framework/parseUrl");
// endpoints={
//     "/users":{
//         "Get": handler1,
//         "Post":  handler2,
//         "Delete": handler3,
//     }
// }

const app = new Application()
app.use(jsonParse)
app.use(urlParse("http://localhost:5000"))

app.addRouter(userRouter)

app.listen(PORT, ()=>{console.log("SERVER STARED ON PORT "+PORT);})
