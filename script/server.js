#!/usr/bin/node
var shell = require('shelljs');

shell.set('-e');

function warn () {
  shell.echo( "Oops! Looks like CouchDB isn't running. CouchDB must be running before you can start HospitalRun.");
  shell.echo( "For help or more info see https://github.com/HospitalRun/hospitalrun-frontend#install");
  shell.exit(0);
}

function check_couchdb_and_start (server) {
  child = shell.exec('curl -s -i ' + server , {silent:true}, function (error, stdout, stderr){
    if (error == 0) {
      shell.echo('Couchdb is running... Starting ember server.');
      shell.exec('ember server');
    } else {
      warn();
    }
  });
}

var serverName = process.env.COUCHDB_URL ? process.env.COUCHDB_URL : 'http://localhost:5984' ;

shell.echo("Checking CouchDB on " + serverName + "...");
check_couchdb_and_start(serverName);
