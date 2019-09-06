var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("helio");
});

app.get("/bye", function(req, res){
	res.send("goo!!");
});



app.listen(3000, process.env.IP, function(){

	console.log("server started");
});