const path = require('path');

module.exports = {
  entry: {
    app: './js/appFetch.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './js/appFetch.js',
  },
};
