#!/usr/bin/node
var shell = require('shelljs');

shell.set('-e');

shell.echo( "==> Running Ember test…" );
shell.exec('ember test');
