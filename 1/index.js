var http = require("http");
var fs = require("fs");
var events = require("events");
var emt = new events.EventEmitter();

emt.once("entUser", function(data){
  var date=new Date();
  console.log(data+" зашел")
});

emt.on("mPage", function(){
  console.log("Запрос на выгрузку главной страницы")
});

emt.on("searching", function(){
  console.log("Пользователь ищет по запросу..")
});

emt.on("cabUser", function(){
  console.log("Запрос на выгрузку кабинета пользователя")
});

emt.on("logout", function(data){
  var date=new Date();
  console.log(data+" вышел")
});

emt.emit("entUser", "Boy202");
setTimeout( function(){ emt.emit("mPage")}, 1000);
setTimeout( function(){ emt.emit("searching")}, 1500);
setTimeout( function(){ emt.emit("cabUser")}, 2000);
setTimeout( function(){ emt.emit("logout", "Boy202")}, 2500);