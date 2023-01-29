const express = require('express');
//?const cors = require('cors'); //? PARA CONECTAR CON EL FRONT 
const { expressjwt: jwt } = require("express-jwt");
// const jwtAuthz = require("express-jwt-authz");
const jwksRsa = require('jwks-rsa');


var checkJwt = jwt({
    secret:  jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-x7wyv3sefvwcr35e.us.auth0.com/.well-known/jwks.json' //?secret
  }),
  audience: 'https://www.app-ejemplo/', //?solo permite token de aca
  issuer: 'https://dev-x7wyv3sefvwcr35e.us.auth0.com/',
  algorithms: ['RS256']
});


export default checkJwt;