var request = require("request");
var fs = require("fs");
var http = require("http");

request("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3", function(err, res, body) {  
	var courses = "";
	var obj = JSON.parse(body);
	var data = fs.readFileSync("courses.html", "utf8");
	for(var i = 0; i < obj.length; i++){
    	var rate = obj[i].ccy + " > Buy: " + obj[i].buy + ". Sale: " + obj[i].sale + ".";
     	str = JSON.stringify(rate).replace(/\"/g, "");
    	courses += str + "\n";
    }

    fs.writeFile("courses.html", courses, function (err) {
		if(err){
		  	throw err;
		}
	});
    console.log(data);
});	
