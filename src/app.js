const express = require('express');
const app = express();

app.use("/user", (req, res, next) => {
    console.log("Handliing Router1");
    
    // res.send("Data sent from the server");
    next();
},
(req, res, next)=>{
    console.log("Handliing Router2");
    next();
},
(req, res, next)=>{
    console.log("Handliing Router3");
    next();
},
(req, res, next)=>{
    console.log("Handliing Router4");
    next();
},
(req, res, next)=>{
    console.log("Handliing Router 5");
    res.send("Handler 5 hadled the request")
})



app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});