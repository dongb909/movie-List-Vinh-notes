var path = require('path');

// module.exports = {
//   node: ''development',
//   entry: '',   //this has to match the exact location of index.jsx including the directory from the root of your comp
//   /*the root node of our file tree bc everything else is connected to it,
//   want to choose the highest lever node of the tree where all the other files are the children, 
//   as long as webpack starts here, webpack will be able to transpile all the files bc it can get 
//   through all. TOP level react file and recursively crawl through react app, it crawls through the import files. that's all the entire app is connected*/
//   output: {
//     path: path.resolve(__dirname, 'dist'),   //the folder we want everything to go to, to be available to the browser.resolve will join the 2 together, path is a part of node so you have to require it
//     filename: 'foo.bundle.js' 
//   }
// };


// /*
// -webpack takes our entire folder and puts it into a single file bundle.js aka compile it into the html div 
// -can only use impmort export if you're using webpack**
// -has no rule on how to read and translate so it's missing babel here.
// */


var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',
        query: {
          presets: ['react', 'env']
       }
      }
    ]
  }
};

