const express = require('express');
const app = express();

app.get("/user", (req, res) => {
    res.send("Data sent from the server");
})

app.post("/user", (req, res) => {
    res.send("Data sent to the server");
})

app.put("/user", (req, res) => {
    res.send("Data updated on the server");
})

app.patch("/user", (req, res) => {
    res.send("Data small portion uodated on the server");
})

app.delete("/user", (req, res) => {
    res.send("Data deleted from the server");
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});