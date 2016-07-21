var express = require('express');
var app = express();

app.get('/', function (req, res) {
	var headerObj = {
		"ipaddress": req.ip,
		"language": req.headers["accept-language"].split(",")[0],
		"software": req.headers["user-agent"].match(/\((.*?)\)/)[1]
	}
	res.send(headerObj);
});

app.listen(80, function () {
  console.log('Example app listening on port 80!');
});