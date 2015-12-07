#!/usr/bin/env node
var fs = require('fs');
var request = require('request');
var cfg = require('./config');
var path = require('path');
var argv = require('yargs')
            .alias('o','output')
            .argv;

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
        
        if (cfg[name] === undefined) {
            
          console.log( "Sorry, " + name + " was not uncached...");
          return ;

        } else {
                     
            filename = cfg[name].split('/').pop();
            console.log('Download '+ filename + ' from ' + cfg[name]);
            (function(){
                if (argv.o){
                    request(cfg[name]).pipe(
                        fs.createWriteStream(path.join(argv.o,filename)),function(err,res,body){
                            if (err) {
                                throw err;
                            } 
                        } 
                    );
                } else {
                    request(cfg[name]).pipe(
                        fs.createWriteStream(filename),function(err,res,body){
                            if (err) {
                                throw err;
                            } 
                        } 
                    );
                    console.log('no argv') 
                }  
            })();
            console.log(filename +" was saved!");

        }
    }

})();
