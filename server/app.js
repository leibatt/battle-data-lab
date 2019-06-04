const express = require('express')
const app = express()
const port = 3000

var path = require('path');

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '..','static', 'index.html'));
});

app.listen(port, () => console.log(`app listening on port ${port}!`))
