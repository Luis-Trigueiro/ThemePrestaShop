const common = require('./common.js');

/**
 * Returns the development webpack config,
 * by merging development specific configuration with the common one.
 */
function devConfig() {
  let dev = Object.assign(
    common,
    {
      mode: 'development',
      devtool: 'inline-source-map',
    }
  );


  /*
   * This is currently a workaround to distribute file while running
   * the webpack dev server.
   */
  dev.output.publicPath = '/admin-dev/themes/new-theme/public/';

  return dev;
}

module.exports = devConfig;
