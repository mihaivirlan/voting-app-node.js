const express = require('express');
    app = express();

const fs = require('fs');

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get("/poll", (req, res) => {
    fs.readFile(__dirname + '/poll.json', 'utf8', function(err, data) {
        res.send(data);
    })
})

app.listen(3001, () => {
    console.log('listen on port 3001');
});