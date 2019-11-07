const express = require('express');
const app = express();
const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
}
);

app.use(express.static(path.join(__dirname, '/')));

app.listen(process.env.PORT || 8000, function() {
    console.log("Server connected");
});