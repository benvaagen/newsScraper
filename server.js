//REQUIRE DEPENDENCIES
var express = require("express");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");

//SET UP THE PORT TO BE EITHER THE HOSTS DESIGNATED PORT OR 3000
var PORT = process.env.PORT || 3000;

var app = express();

//SET UP AN EXPRESS ROUTER
var router = express.Router();

//PUBLIC FOLDER AS STATIC DIRECTORY
app.use(express.static(__dirname + "/public"));

//CONNECT HANDLEBARS
app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//USE BODY-PARSER
app.use(bodyParser.urlendcoded({
    extended: false
}));

//DESIGNATE ROUTER MIDDLEWARE
app.use(router);

//LISTEN ON THE PORT
app.listen(PORT, function() {
    console.log("Listening on port: " + PORT);
});