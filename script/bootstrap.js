#!/usr/bin/node
// Usage: script/bootstrap.js
// Ensures all dependencies are installed locally.
var shell = require('shelljs');
var fs = require('fs');

shell.set('-e');

shell.cd( __dirname + '/..');

shell.exec('git pull');

fs.stat("package.json", function(err, stats){
  if(err){
    switch(err.code){
      case 'ENOENT':
        shell.echo(filename + ' does not exist');
        break;
    }
    return;
  }
  shell.echo( "==> Installing packages…" );
  shell.exec('npm install');
  shell.exec('npm install -g phantomjs-prebuilt');
});

fs.stat("bower.json", function(err, stats){
  if(err){
    switch(err.code){
      case 'ENOENT':
        shell.echo(filename + ' does not exist');
        break;
    }
    return;
  }
  shell.echo("==> Installing bower components…");
  shell.exec('bower install');
});
