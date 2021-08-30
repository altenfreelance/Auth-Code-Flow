var axios = require("axios");

// Properties
var propertiesReader = require('properties-reader');
var oAuthProps = propertiesReader('oauth.properties');
try{
    oAuthProps.append('oauth.local.properties')
}
catch (e){
    console.log(e)
}

const tokenEndpoint = `${oAuthProps.get("host")}/oauth/token`

const oAuth = (req, res, next) => {

    var code = req.query.code;

    if (!code) {
        res.status(401).send("Missing authorization code!")
    }

    const params = new URLSearchParams();
    params.append("grant_type", "authorization_code")
    params.append("client_id", oAuthProps.get("client.id"))
    params.append("client_secret", oAuthProps.get("client.secret"))
    params.append("code", code)
    params.append("redirect_uri", "http://localhost:3000/poc")

    axios.post(tokenEndpoint, params)
    .then(response => {
        req.oauth = response.data
        next()
    })
    .catch(err => {
        console.error(err)
        res.status(403).json(`Reason: ${err.response.data.error_description}`)
    })
}

module.exports = oAuth;
