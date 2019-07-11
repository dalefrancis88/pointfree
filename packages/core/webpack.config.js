var path = require('path')

module.exports = {
    entry: ['./src/index.js'],
    output: {
      filename: 'core.js',
      path: path.resolve(__dirname, 'build'),
      library: 'pointfree-core',
      libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [
                    /node_modules/,
                    /\.spec.js$/
                ],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                "targets": {
                                    "browsers": ["last 2 versions", "safari > 8", "not ie < 11"],
                                    "esmodules": true
                                }
                            }]
                        ]
                    }
                }]
            }
        ]
    }
}