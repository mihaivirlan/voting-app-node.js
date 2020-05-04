const express = require('express');
    app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.listen(3001, () => {
    console.log('listen on port 3001');
});