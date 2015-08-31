#!/usr/bin/env node
var urlparse = require('url').parse
  , http = require('http')
  , fs = require('fs');

var url = urlparse('http://lib.sinaapp.com/js/jquery/1.2.4/jquery.min.js');
console.log(url);
