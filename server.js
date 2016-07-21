var express = require('express');
var app = express();

app.get('/', function (req, res) {
	var ipAddr = req.headers["x-forwarded-for"];
	if (ipAddr){
		var list = ipAddr.split(",");
		ipAddr = list[list.length-1];
	} else {
		ipAddr = req.connection.remoteAddress;
	}
	var headerObj = {
		"ipaddress": ipAddr,
		"language": req.headers["accept-language"].split(",")[0],
		"software": req.headers["user-agent"].match(/\((.*?)\)/)[1]
	}
	res.send(headerObj);
});

app.listen(process.env.PORT || 80, function () {
  console.log('Example app listening on port' + process.env.PORT + '.');
});