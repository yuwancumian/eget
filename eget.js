#!/usr/bin/env node
var fs = require('fs');
var request = require('request');
var cfg = require('./config');
var path = require('path');

(function(){
    var name = process.argv[2];
    var url = process.argv[3];
    
    if (name === "set") {
        console.log('set a path')
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
        }

        if (url) {
            var filename = cfg[name].split('/').pop();
            (function( name ){
                request(address + name +'/' + version +'/'+ name + '.js').pipe(fs.createWriteStream(filename));
            })(name);
            console.log(filename +" was download!");
        } else {
            (function( name ){
                request(cfg[name]).pipe(fs.createWriteStream(filename));
            })(name);
            console.log(filename +" was download!");
        }

    }
    cfg = require('./config');
})();
