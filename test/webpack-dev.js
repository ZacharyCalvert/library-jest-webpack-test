var webpack = require('webpack');
var WebPackDevServer = require('webpack-dev-server');
var open = require('open');
var path = require('path');

const port = 3000;
const config = require('../webpack.config.js');

config.mode = 'development';

const options = {
  hot: true,
  host: 'localhost',
  contentBase: path.join(__dirname, 'static'),
}

const compiler = webpack(config);

const server = new WebPackDevServer(compiler, options);
server.listen(port, "0.0.0.0", (err) => {
  if (err) {
    console.log("Error starting webpack server", err);
  } else {
    console.log("Webpack development port listening on", port);
    open("http://localhost:" + port + "/index.html");
  }
});
