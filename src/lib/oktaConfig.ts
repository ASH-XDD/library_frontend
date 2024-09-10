export const oktaConfig={
    clientId:`0oajieg6wfgmzzuo65d7`,
    issuer:`https://dev-50943679.okta.com`,
    redirectUri:"http://localhost:3000/login/callback",
    scopes:['openid','profile','email'],
    pkce: true,
    disableHttpsCheck:true,
};