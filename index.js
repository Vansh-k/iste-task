const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
// const mongoose = require("mongoose");

const app = express();

app.use(express.static(__dirname + '/public/'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

var inputNumber ;
var colors = []

app.get("/",function(req,res){
  res.render("home");
});
app.post("/",function(req,res){
  const a = req.body;
  inputNumber = Math.floor(a.inputN);
  colors.push(a.color1,a.color2,a.color3);
  res.redirect("/grid");
});
app.get("/grid",function(req,res){
  res.render("grid", {noOfGrid : inputNumber,colorPref : colors});
  colors = [];
});



app.listen(process.env.Port||"3000", function() {
  console.log("Server has started sucessfully");
});
