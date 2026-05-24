const { createVercelBeginHandler } = require('netlify-cms-oauth-provider-node');

const config = {
  origin: ['https://thienbach2748-svg.github.io'],
  oauthProvider: 'github',
  oauthScopes: 'repo,user',
};

module.exports = createVercelBeginHandler(config, { useEnv: true });
