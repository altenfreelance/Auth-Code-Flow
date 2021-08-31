# Auth-Code-Flow
Authorization Code Flow POC demo app built with node express and React.

This repo is simple a POC and basic implementation of the authorization code flow authorization with a middleman server that 
has access the the client secret (not stored on the front end at all).

Future work will include implementing PKCE Auth Code Flow as well.
For a demo of Auth-Code-Flow with PKCE in an SPA see https://github.com/altenfreelance/Auth-Code-Flow-PKCE

## Setup

### Prereqs
* yarn
* node
* git bash or other linux based terminal
* An Open ID Connect/Oauth2 IDP that is properly configured to work with this localhost:3000 application.

### Front End Setup
Create a file called `.env.local` in `react_client/` and copy the properties from `.env` replacing the properties accordingly
with info from your idp (or set them directly in `.env`)

### Exchange Server Setup
Create a file called `oauth.local.properties` in `exchange_expess_server/` and copy the properties from `oauth.properties` replacing the properties accordingly with info from your idp (or set them directly in `oauth.properties`)

### Protected Server Setup
Create a file called `oauth.local.properties` in `protected_expess_server/` and copy the properties from `oauth.properties` replacing the properties accordingly with info from your idp (or set them directly in `oauth.properties`)

## Run the App
Run `./start.sh` in git bash to launch both services and the front end

## Sources
* https://jcbaey.com/oauth2-oidc-best-practices-in-spa
* https://www.youtube.com/watch?v=dyZmsz6usWk
* https://www.youtube.com/watch?v=MqczHS3Z2bc


### Future work
* https://developers.onelogin.com/openid-connect/guides/auth-flow-pkce
* https://auth0.com/docs/authorization/which-oauth-2-0-flow-should-i-use