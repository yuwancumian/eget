#!/usr/bin/env node
var urlparse = require('url').parse;
var http = require('http');
var fs = require('fs');
var request = require('request');


(function(){
    var name = process.argv[2];
    var version = process.argv[3];
    var opt = {
        // 如果不指定版本就使用默认版本
        jquery: '1.11.1',
        'backbone.js': '1.1.2',
        underscore: '1.7.0',
        react: '0.12.0-rc1'
    };
    var address = 'http://cdn.staticfile.org/';
    if (version) {
        (function( name ){
            request(address + name +'/' + version +'/'+ name + '.js').pipe(fs.createWriteStream(name+'.js'));
        })(name);
        console.log("version is ok!");
    } else {
        (function( name ){
            request(address + name +'/' + opt[name] +'/'+ name + '.js').pipe(fs.createWriteStream(name+'.js'));
        })(name);
        console.log(address + name +'/' + opt[name] +'/'+ name + '.js');
    }

})();
//request(jquery).pipe(fs.createWriteStream('jquery.min.js'));
