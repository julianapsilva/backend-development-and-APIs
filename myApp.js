var express = require('express');
var app = express();
console.log("Hello World")

require('dotenv').config()

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    next()
})

app.get("/", (req, res) => {
    const absolutePath = __dirname + '/views/index.html'
    res.sendFile(absolutePath)
})

app.get("/public", (req, res) => {
    const absolutePath = __dirname + '/views/index.html'
    res.sendFile(absolutePath)
})

app.use("/public", express.static(__dirname + "/public"));


app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE == "uppercase")
        res.json({ message: "Hello json".toUpperCase() })
    else
        res.json({ message: "Hello json"}) 
})


































module.exports = app;
