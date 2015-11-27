#!/usr/bin/env node
var request = require('request');
var fs = require('fs');
var cfg = require('./lib/cfg');

var name = process.argv[2];
var url = '';

var getversion = function(name){
    request('https://api.cdnjs.com/libraries').pipe(fs.createWriteStream('./lib/cfg.json'));
}

var libs = cfg.results;
//console.log(libs);


var getbaidu = function(){request('www.baidu.com', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // Show the HTML for the Google homepage.
        } else{
            console.log(error)
        }
    })
}
//getbaidu();
//
//getversion();

for(key in libs){
    //console.log(key);
    var item = libs[key];
    if (item['name'] === name) {
        var url = item['latest'];
        var remove =url.split('/').slice(3);
        console.log(remove);
        console.log("http://v2.easier.upyun.com/"+remove.join('/'))
    }
}

