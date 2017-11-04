#!/usr/bin/node
var shell = require('shelljs');

shell.set('-e');

shell.echo( "==> Running Ember build…" );
shell.exec('ember build');
