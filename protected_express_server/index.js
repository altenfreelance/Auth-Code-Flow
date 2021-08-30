var express = require('express');
var app = express();
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
var guard = require('express-jwt-permissions')();
var morgan = require('morgan')

// Properties
var propertiesReader = require('properties-reader');
var oAuthProps = propertiesReader('oauth.properties');
try{
    oAuthProps.append('oauth.local.properties')
}
catch (e){
    console.log(e)
}

var port = process.env.PORT || 8080;

var cors = require('cors')

// Logging
app.use(morgan('combined'))

app.use(cors({origin:true,credentials: true}));

var jwtCheck = jwt({
      secret: jwks.expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: `${oAuthProps.get("host")}/.well-known/jwks.json`
    }),
    audience: oAuthProps.get("audience"), 
    issuer: `${oAuthProps.get("host")}/`,
    algorithms: ['RS256']
});

app.use(jwtCheck);

app.get('/poc', guard.check("read:poc"), function (req, res) {
    res.json(
        {
            poc1: "This is some hard code coming from protected server", 
            poc2: "... testing 123"
        }
    );
});

app.listen(port, () => console.log("Started Protected Server"));