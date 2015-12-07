#!/usr/bin/env node
var fs = require('fs');
var request = require('request');
var cfg = require('./config');
var path = require('path');

(function(){
    var address;
    var name;
    var url;
    var filename;

    if (process.argv[2] === "set") {

        name = process.argv[3];
        url = process.argv[4];
        cfg[name] = url;
        fs.writeFile(path.join(__dirname,'config.json'),JSON.stringify(cfg,null,4),function(err){
            if (err) throw err;
            console.log(name +' was added!');
        })


    } else {
    
        name = process.argv[2];
        url = process.argv[3];
        filename = cfg[name].split('/').pop();
        
        if (cfg[name] === undefined) {
            
          console.log( "Sorry, " + name + " was not uncached...");
          return ;

        } else {
                
            console.log(filename);
            (function( name ){
                request(cfg[name]).pipe(fs.createWriteStream(filename));
            })(name);
    
            console.log(filename +" was download!");

        }
    }

})();
