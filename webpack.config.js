var path = require("path");
module.exports = {
   entry: "./js/app.js",
   output: {filename: "out.js", path: path.resolve(__dirname) + '/js'},
   watch: true,
   mode: "development",
   module: {
       rules: [{
           test: /\.js$/,
           exclude: /node_modules/,
           use: {
               loader: 'babel-loader',
               options: {
                   presets: ['es2015']
               }
           }
       },
       {
           test: /\.scss$/,
           use: [
               'style-loader',
               'css-loader',
               'sass-loader'
           ]
       }
       ]
   },
};