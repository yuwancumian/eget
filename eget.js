#!/usr/bin/env node
var fs = require('fs');
var request = require('request');


(function(){
    var name = process.argv[2];
    var version = process.argv[3];
    var opt = {
        jquery: 'http://cdn.staticfile.org/jquery/1.11.1/jquery.js',
        backbone: 'http://cdn.staticfile.org/backbone.js/1.1.2/backbone.js',
        underscore: 'http://cdn.staticfile.org/underscore.js/1.7.0/underscore.js',
        zepto: 'http://cdn.staticfile.org/zepto/1.1.4/zepto.js',
        bootjs: 'http://cdn.staticfile.org/twitter-bootstrap/3.3.1/js/bootstrap.js',
        bootcss: 'http://cdn.staticfile.org/twitter-bootstrap/3.3.1/css/bootstrap.css',
        normalize: 'http://easier.b0.upaiyun.com/css/normalize.css',
        modernizr: 'http://easier.b0.upaiyun.com/js/modernizr-2.6.2.min.js',
        mustuche: 'http://cdn.staticfile.org/mustache.js/0.8.1/mustache.js',
        require: 'http://cdn.bootcss.com/require.js/2.1.17/require.js',
        react: 'http://easier.b0.upaiyun.com/react.js',
        jsx: 'http://easier.b0.upaiyun.com/JSXTransformer.js',
        ignore: 'http://easier.b0.upaiyun.com/.gitignore',
        jshint: 'http://easier.b0.upaiyun.com/.jshintrc'
    };
    var address = 'http://cdn.staticfile.org/';
    var filename = opt[name].split('/').pop();
    if (opt[name] === undefined) {
        console.log( "Sorry, " + name + " was not uncached...");
        return ;
    }


    if (version) {
        (function( name ){
            request(address + name +'/' + version +'/'+ name + '.js').pipe(fs.createWriteStream(filename));
        })(name);
        console.log(filename +" was download!");
    } else {
        (function( name ){
            request(opt[name]).pipe(fs.createWriteStream(filename));
        })(name);
        console.log(filename +" was download!");
    }

})();
