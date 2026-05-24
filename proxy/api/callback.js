const { createVercelCompleteHandler } = require('netlify-cms-oauth-provider-node');

const config = {
  origin: ['https://thienbach2748-svg.github.io'],
  oauthProvider: 'github',
};

module.exports = createVercelCompleteHandler(config, { useEnv: true });
