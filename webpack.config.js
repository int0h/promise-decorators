const path = require('path');

module.exports = {
    entry: {
        app: ["./src/index.js"]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    },
    devtool: 'source-map'
};