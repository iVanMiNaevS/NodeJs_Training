const events = require("events")

const event = new events()

event.on("msg", (msg)=>{
    console.log(msg);
})
event.on("Notmsg", (msg)=>{
    console.log("Нет message");
})

const pip = "";

if(pip !== ""){
    event.emit("msg", pip)
}else{
    event.emit("Notmsg", pip)
}