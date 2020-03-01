const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack');
let path = require('path');


module.exports =
{
    entry: {
        index: './src/index.js',
        FormElements: './src/pages/FormElements/FormElements.js',
        ColorType: './src/pages/Colors&Type/Colors&Type.js',
        Cards: './src/pages/Cards/Cards.js',
    },
    output:
    {
        path: path.resolve(__dirname, 'dist'),
        filename: 'scripts/[name].js',
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new HtmlWebpackPlugin({
            inject: true,
            chunks: ['index'],
            filename: 'index.html',
            template:'./src/index.pug',
            }),
        new HtmlWebpackPlugin({
            inject: true,
            chunks: ['FormElements'],
            filename: 'pages/FormElements.html',
            template:'./src/pages/FormElements/FormElements.pug',
            }),
        new HtmlWebpackPlugin({
            inject: true,
            chunks: ['ColorType'],
            filename: 'pages/Colors&Type.html',
            template:'./src/pages/Colors&Type/Colors&Type.pug',
        }),
        new HtmlWebpackPlugin({
            inject: true,
            chunks: ['Cards'],
            filename: 'pages/Cards.html',
            template:'./src/pages/Cards/Cards.pug',
        })
        ],


    module:
    {
        rules:
            [
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                      loader: 'babel-loader',
                      options: {
                        presets: [
                            '@babel/preset-env'
                    ]
                      }
                    }
                },

                {
                    test: /\.css$/,
                    /*include: [
                        path.resolve(__dirname, "not_exist_path")
                    ],*/
                    use: [
                        'style-loader',
                        'css-loader',
                        'postcss-loader'
                    ]
                },

                {
                    test: /\.s[ac]ss$/,
                    use: [
                        // Creates `style` nodes from JS strings
                        'style-loader',
                        // Translates CSS into CommonJS
                        'css-loader',
                        // Compiles Sass to CSS
                        'sass-loader',
                    ],
                },

                {
                    test: /\.pug$/,
                    loader: 'pug-loader',
                    options:
                    {
                        pretty: true
                    }
                },
                {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'fonts/'
                            }
                        },
                    ]
                },
                {
                    test: /\.(gif|png|jpe?g|svg)$/i,
                    use: [
                        'file-loader',
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                bypassOnDebug: true, // webpack@1.x
                                disable: true, // webpack@2.x and newer
                            },
                        },
                    ]
                },

            ],
    },
};




//module.exports = conf;