#!/usr/bin/env node
var request = require('request');
var libs;


var getversion = function(name){
    request('https://api.cdnjs.com/libraries',function(error,response,body){
        if (!error && response.statusCode == 200) {
            console.log(typeof(body)) // Show the HTML for the Google homepage.
            libs = JSON.parse(body)['results'];
            var start=new Date().getTime();
            //console.log(start);
            for(var key in libs){
                var item =libs[key];
                if(item['name']==name){
                    console.log(item.latest);
                }
            }
            var end = new Date().getTime();
            console.log(end-start);
            // var count=0;
            // var timer = setInterval(function function_name() {
            //     count++;
            //
            // },1);

            // clearInterval(timer);
            // console.log(count);
                   // console.log(libs);
        }
    })
}


/*request('www.baidu.com', function (error, response, body) {*/
  //if (!error && response.statusCode == 200) {
    //console.log(body) // Show the HTML for the Google homepage.
  //}
/*})*/

getversion("zxcvbn");
