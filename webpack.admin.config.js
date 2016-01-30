/**
 * Created by chenwei on 2016/1/20.
 */

var webpack=require('webpack');
var path=require('path');
//提取css文件
var ExtractTextPlugin=require('extract-text-webpack-plugin');
//提取根据模板动态打包html文件
var HtmlWebpackPlugin=require('html-webpack-plugin');

var debug=true;
var url='http://localhost';
var entryConfig=[];
var output={};
var plugin=[];
if(debug){
    entryConfig=
        {
            home: ['webpack/hot/dev-server','webpack-dev-server/client?http://localhost:8080/','./src/admin/entryW/app.js'],
            //home: ['webpack/hot/dev-server','webpack-dev-server/client?http://localhost:8080/','./src/entry/admin/home.serverjs'],
            //page_1: ['webpack/hot/dev-server','webpack-dev-server/client?http://localhost:8080/','./src/entry/pc/page_1.serverjs'],
            //page_2: ['webpack/hot/dev-server','webpack-dev-server/client?http://localhost:8080/','./src/entry/pc/page_2.serverjs'],
        }
     ;
    output={
        path: path.join(__dirname,"/public/admin/build"),
        publicPath: "http://localhost:8080/admin/build/",
        filename: "js/app.js"
    };
    plugin=[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin('js/comment.js'),
        new ExtractTextPlugin('css/app.css',{allChunks:true}),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new HtmlWebpackPlugin({
            title:'EASY',
            favicon:'./src/view/admin/icon/easy.ico',
            filename:'/view/admin.html',
            template:'./src/view/admin/index.html',
            inject:true,
            hash:true,
            minify:{
                removeComments:true,
                collapseWhitespace:false
            }
        })
    ]
}else{
    entryConfig=[
         './src/entry/pc/home.js'
     ];
    output={
        path: path.join(__dirname,"/public/pc/assets/"),
        publicPath: url+"/pc/assets/",
        filename: "serverjs/pc.js",
        chunkFilename:'serverjs/[id].chunk.js'
    };
    plugin=[
        new webpack.optimize.CommonsChunkPlugin('serverjs/comment.js'),
        new ExtractTextPlugin('css/[name].css',{allChunks:true}),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.optimize.UglifyJsPlugin({    //压缩代码
            compress: {
                warnings: false
            },
            except: ['$super', '$', 'exports', 'require']    //排除关键字
        }),
        new HtmlWebpackPlugin({
            title:'EASY',
            favicon:'./src/view/pc/icon/easy.ico',
            filename:'/view/index.html',
            template:'./src/view/pc/index.html',
            inject:true,
            hash:true,
            minify:{
                removeComments:true,
                collapseWhitespace:true
            }
        })
    ]
}

module.exports={
    entry:entryConfig,
    output:output,
    module:{
        loaders:[
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader","css-loader")
            },
            {
                test: /\.scss$/,
                loaders: ["style","css?sourceMap","sass?sourceMap"]
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            { test: /\.(png|jpg|gif|jpeg|svg|eot|woff2|woff|ttf|ico)$/, loader: "url-loader?limit=10000&name=img/[hash:8].[name].[ext]" }
        ]
    },
    resolve:{
        root:[__dirname+'/src',__dirname+'/node_modules'],
        extensions:['','.js','.json','.css','.scss','.ejs','.png','.jpg'],
        alias:{
            jquery:__dirname+'/node_modules/jquery/dist/jquery.min.js',
            bootstrap_js:__dirname+'/node_modules/bootstrap/dist/js/bootstrap.min.js',
            bootstrap_css:__dirname+'/node_modules/bootstrap/dist/css/bootstrap.min.css'
        }
    },
    plugins: plugin
};