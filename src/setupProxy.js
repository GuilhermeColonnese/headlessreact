const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/o',
    createProxyMiddleware({
      target: 'https://webserver-projectID-prd.lfr.cloud',
      changeOrigin: true,
    })
  );
};

