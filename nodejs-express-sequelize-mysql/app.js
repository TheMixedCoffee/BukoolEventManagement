const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");

const test = require("./models/test");
const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", async (req,res)=>{
   await test.model.findOne({
       where:{
           data: "Hello"
       }
   }).then(value =>{
       res.send(value);
   }).catch(e =>{
       res.send(e);
   })
})

app.get("/create", async (req,res)=>{
    await test.model.create({
        data: "XD",
        value: "KEK"
    }).then(value =>{
        res.send(value);
    }).catch(e =>{
        res.send(e);
    })
})

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`The server is running on port ${PORT}.`);
});