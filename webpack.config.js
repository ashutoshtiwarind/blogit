// webpack.config.js
const path = require('path');

module.exports = {
    entry: './app.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        fallback: {
            "path": false,
            "buffer": false,
            "url": false,
            "stream": require.resolve("stream-browserify")
        }
    },
};
