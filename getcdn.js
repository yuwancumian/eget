#!/usr/bin/env node
var request = require('request');
var libs;


var getversion = function(){
    request('https://api.cdnjs.com/libraries',function(error,response,body){
        if (!error && response.statusCode == 200) {
            console.log(body) // Show the HTML for the Google homepage. 
            libs = body[results];
            console.log(libs);
        }
    })
}
/*request('www.baidu.com', function (error, response, body) {*/
  //if (!error && response.statusCode == 200) {
    //console.log(body) // Show the HTML for the Google homepage. 
  //}
/*})*/

getversion();

