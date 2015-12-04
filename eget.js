#!/usr/bin/env node
var fs = require('fs');
var request = require('request');
var cfg = require('./config');
var path = require('path');

(function(){
    var address = 'http://cdn.staticfile.org/';
    var name = process.argv[2];
    var url = process.argv[3];
    var filename = cfg[name].split('/').pop();
    
    if (name === "set") {
        name = process.argv[3];
        url = process.argv[4];
        cfg[name] = url;
        console.log(__dirname);
        fs.writeFile(path.join(__dirname,'config.json'),JSON.stringify(cfg,null,4),function(err){
            if (err) throw err;
            console.log(name +' was added!');
        })
    } else {

        if (cfg[name] === undefined) {
            console.log( "Sorry, " + name + " was not uncached...");
            return ;
        } else {
            console.log(filename);
            (function( name ){
                request(cfg[name]).pipe(fs.createWriteStream(filename));
            })(name);
        }

    }
    console.log(filename +" was download!");
    cfg = require('./config');
})();
