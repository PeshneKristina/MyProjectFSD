const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack');
let path = require('path');
const CopyPlugin = require('copy-webpack-plugin');


module.exports =
    {

        entry: {
            index: './src/index.js',
            FormElements: './src/pages/FormElements/FormElements.js',
            ColorType: './src/pages/Colors&Type/Colors&Type.js',
            Cards: './src/pages/Cards/Cards.js',
            HeadersFooters: './src/pages/Headers&Footers/Headers&Footers.js',
            UIKit: './src/pages/UIKit/UIKit.js',
            WebsitePages: './src/pages/WebsitePages/WebsitePages.js',
            SignIn: './src/pages/SignIn/SignIn.js',
            Registration:'./src/pages/Registration/Registration.js',
        },
        output:
            {
                path: path.resolve(__dirname, 'dist'),
                filename: 'scripts/[name].js',
            },


        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            }),
            new HtmlWebpackPlugin({
                inject: true,
                chunks: ['index'],
                filename: 'index.html',
                template: './src/index.pug',
            }),
            new HtmlWebpackPlugin({
                inject: true,
                chunks: ['FormElements'],
                filename: 'pages/FormElements.html',
                template: './src/pages/FormElements/FormElements.pug',
            }),
            new HtmlWebpackPlugin({
                inject: true,
                chunks: ['ColorType'],
                filename: 'pages/Colors&Type.html',
                template: './src/pages/Colors&Type/Colors&Type.pug',
            }),
            new HtmlWebpackPlugin({
                inject: true,
                chunks: ['Cards'],
                filename: 'pages/Cards.html',
                template: './src/pages/Cards/Cards.pug',
            }),
            new HtmlWebpackPlugin({
                inject: true,
                chunks: ['HeadersFooters'],
                filename: 'pages/Headers&Footers.html',
                template: './src/pages/Headers&Footers/Headers&Footers.pug',
            }),
            new HtmlWebpackPlugin({
                inject: true,
                chunks: ['WebsitePages'],
                filename: 'pages/WebsitePages.html',
                template: './src/pages/WebsitePages/WebsitePages.pug',
            }),
            new HtmlWebpackPlugin({
                inject: true,
                chunks: ['UIKit'],
                filename: 'pages/UIKit.html',
                template: './src/pages/UIKit/UIKit.pug',
            }),
            new HtmlWebpackPlugin({
                inject: true,
                chunks: ['SignIn'],
                filename: 'pages/SignIn.html',
                template: './src/pages/SignIn/SignIn.pug',
            }),
            new HtmlWebpackPlugin({
                inject: true,
                chunks: ['Registration'],
                filename: 'pages/Registration.html',
                template: './src/pages/Registration/Registration.pug',
            }),

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
                                {loader: 'style-loader'},
                                // Translates CSS into CommonJS
                                {loader: 'css-loader'},
                                {loader: 'resolve-url-loader'},
                                {
                                    // Compiles Sass to CSS
                                    loader: 'sass-loader',
                                    options: {
                                        sourceMap: true
                                    }
                                }
                            ]
                        },
                        /*{
                            test: /\.s[ac]ss$/,
                            use: [
                                'style-loader',
                                'css-loader',
                                'resolve-url-loader',
                                'sass-loader',
                                /!*options: {
                                    debug: true,
                                    root: path.join(__dirname, './images'),
                                    includeRoot: true,
                                    absolute: true,
                                },*!/
                            ],
                        },*/
                        /*{
                            test: /\.(jpeg|jpg|png|svg)(\?v=\d+\.\d+\.\d+)?$/,
                            //Исключаем каталог с шрифтами
                            exclude: [
                                path.resolve(__dirname, "src/fonts/")
                            ],
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                //publicPath: '/images/',
                                outputPath: 'images/'
                            },
                        },*/
                        /*{
                            test: /\.(jpg|png|svg)$/,
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'images/'
                            },
                        },*/

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
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'fonts',
                                publicPath: "./../fonts"
                            }
                        },

                        {
                            test: /\.(jpeg|jpg|png|svg)$/,
                            loader: 'file-loader',
                            exclude: [
                                path.resolve(__dirname, "./../fonts/")
                            ],
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'img',
                                publicPath: "./../img"
                            }
                        },


                        /*{
                            test: /\.svg$/,
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'img',
                                publicPath: "./../img"
                            }
                        },*/
                        /* {
                             test: /\.(woff(2)?|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
                             use: [
                                 {
                                     loader: 'file-loader',
                                     options: {
                                         name: '[name].[ext]',
                                         outputPath: 'fonts/'
                                     }
                                 },
                             ]
                         },*/
                        /*{
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
                        },*/

                    ],
            },
    };


//module.exports = conf;