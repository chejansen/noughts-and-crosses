import webpack from 'webpack';

const middlewareConfig = config => ({
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: {
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false
  }
});

const loadDevEnvironment = app => {
  const config = require('../webpack.config.dev.js');
  const compiler = webpack(config);
  app.use(require('webpack-dev-middleware')(compiler, middlewareConfig(config)));
  app.use(require("webpack-hot-middleware")(compiler));
};

export {
  loadDevEnvironment
}