#!/usr/bin/node
var shell = require('shelljs');

shell.set('-e');

function warn () {
  shell.echo( "Oops! Looks like CouchDB isn't running. CouchDB must be running before you can start HospitalRun.");
  shell.echo( "For help or more info see https://github.com/HospitalRun/hospitalrun-frontend#install");
  shell.exit(0);
}

function check_couchdb_and_config(name, server) {
  child = shell.exec('curl -s -i ' + name , {silent:true}, function (error, stdout, stderr){
    if (error == 0) {
      build_db(server);
    } else {
      warn();
    }
  });
}

function build_db(server) {
  shell.echo("Setting up security on _users db");
  shell.exec(`curl -X PUT ` + SECUREHOST + `/_users/_security -d '{ "admins": { "names": [], "roles": ["admin"]}, "members": { "names": [], "roles": ["admin"]}}'`);
  shell.echo("Setting up HospitalRun config DB");
  shell.exec(`curl -X PUT ` + SECUREHOST + `/config`);
  shell.exec(`curl -X PUT ` + SECUREHOST + `/config/_security -d '{ ` +
      `"admins": { "names": [], "roles": ["admin"]}, ` +
      `"members": { "names": [], "roles": []} `+
    `}'`);
  shell.echo("Setting up config/_design");
  shell.exec( `curl -X PUT ` + SECUREHOST + `/config/_design/auth -d `+
    `"{ \\"validate_doc_update\\": \\"function(newDoc, oldDoc, userCtx) { `+
        `if (userCtx.roles.indexOf('_admin')!== -1) {`+
          `return;} `+
        `else { `+
          `throw( {forbidden: 'This DB is read-only'} ); `+
        `}}\\" `+
    `}"`
  );
  shell.echo("Setting up HospitalRun main DB");
  shell.exec(`curl -X PUT ` + SECUREHOST + `/main`);
  shell.exec(`curl -X PUT ` + SECUREHOST + `/main/_security -d `+
    `'{ "admins": { "names": [], "roles": ["admin"]}, `+
    `"members": { "names": [], "roles": ["user"]}}'`
  );
  shell.echo("Configure CouchDB authentication");
  shell.exec(`curl -X PUT ` + SECUREHOST + `/main/_design/auth `+
    `-d "{\\"validate_doc_update\\": \\"function(newDoc, oldDoc, userCtx) { `+
      `if(userCtx.roles.indexOf('_admin')!== -1 || userCtx.roles.indexOf('admin')!== -1){ `+
        `if (newDoc._id.indexOf('_design') === 0) { return; } `+
        `}if (newDoc._id.indexOf('_') !== -1) { `+
          `var idParts=newDoc._id.split('_'); `+
          `if (idParts.length >= 3) { `+
            `var allowedTypes=['allergy','appointment','attachment','billingLineItem','customForm','diagnosis','imaging','incCategory',`+
                              `'incidentNote','incident','invLocation','invPurchase','invRequest','inventory','invoice','lab','lineItemDetail',`+
                              `'lookup','medication','operationReport','operativePlan','option','overridePrice','patientNote','patient','payment',`+
                              `'photo','priceProfile','pricing','procCharge','procedure','report','sequence','userRole','visit','vital'];`+
            `if (allowedTypes.indexOf(idParts[0]) !== -1) {`+
              `if(newDoc._deleted || newDoc.data) {return;}`+
        `}}}throw({forbidden: 'Invalid data'});}\\"`+
      `}"`
  );
  shell.exec(`curl -X PUT ` + SECUREHOST + `/_config/http/authentication_handlers `+
    `-d '"{couch_httpd_oauth, oauth_authentication_handler}, `+
         `{couch_httpd_auth, proxy_authentification_handler}, `+
         `{couch_httpd_auth, cookie_authentication_handler}, `+
         `{couch_httpd_auth, default_authentication_handler}"'`
  );
  shell.exec(`curl -X PUT ` + SECUREHOST + `/_config/couch_httpd_oauth/use_users_db -d '"true"'`);
  shell.echo("Add hradmin user for use in HospitalRun");
  shell.exec(`curl -X PUT ` + SECUREHOST + `/_users/org.couchdb.user:hradmin `+
    `-d '{"name": "hradmin", "password": "test", `+
        `"roles": ["System Administrator","admin","user"], `+
        `"type": "user", "userPrefix": "p1"}' `
    );
}

const URL="localhost";
const PORT="5984";
var HOST, SECUREHOST, SERVERNAME;

if ( process.env.COUCHDB_URL != null) {
  SERVERNAME = process.env.COUCHDB_URL.substr(7);
} else {
  SERVERNAME = URL + ":" + PORT;;
}

if ( process.argv[0]  ||  process.argv[1] ) {
  shell.exec("curl -X PUT http://" + SERVERNAME + `/_config/admins/couchadmin -d '"test"'`);
  SECUREHOST="http://couchadmin:test@" + SERVERNAME;
} else {
  SECUREHOST="http://" + process.argv[0] + ":" +  process.argv[1] + "@" + SERVERNAME.substr(6,SERVERNAME.lenght());
}

shell.echo("Configuring CouchDB on " + SERVERNAME + "..." + SECUREHOST + '...');
check_couchdb_and_config(SERVERNAME, SECUREHOST);
