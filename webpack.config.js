const path = require('path');

module.exports = {
  entry: './src/index.js', // создадим позже
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
};
