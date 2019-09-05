module.exports = async ({config, mode}) => {
  config.watch = true;
  config.watchOptions = {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/
  };

  return config;
};
