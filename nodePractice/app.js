var express = require("express");
var app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");


app.get("/", function(req, res){
	console.log("root");
	res.send("connected");
});

app.get("/home", function(req, res){
	res.render("home");
});


var port = process.env.PORT || 3000;

app.listen(port, function(){
	console.log("server started");
});