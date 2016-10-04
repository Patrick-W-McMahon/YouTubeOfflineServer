const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');

const port = process.env.PORT || 8080;
const app = express();

app.use('/', express.static(__dirname + '/bin/www'));
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'bin', 'www', 'index.html'));
});

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});
