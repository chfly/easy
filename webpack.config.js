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
var entryConfig;
var output={};
var plugin=[];
if(debug){
    entryConfig=
        {
            //react entry file
            react: ['webpack/hot/dev-server','webpack-dev-server/client?http://localhost:8080/','./src/react/entry/entryWebpack/test.js'],

            //angular entry file
            //angular: ['webpack/hot/dev-server','webpack-dev-server/client?http://localhost:8080/','./src/angular/entry/angular.js'],

        }
     ;
    output={
        path: path.join(__dirname,"/public/"),
        publicPath: "http://localhost:8080/",
        filename: "js/[name].js"
    };
    plugin=[
        new webpack.HotModuleReplacementPlugin(),
        //new webpack.optimize.CommonsChunkPlugin('js/comment.js'),
        new ExtractTextPlugin('css/[name].css',{allChunks:true}),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
   /*     new HtmlWebpackPlugin({
            title:'EASY',
            favicon:'./src/view/icon/easy.ico',
            filename:'/view/admin.html',
            template:'./src/view/index.html',
            inject:true,
            hash:true,
            minify:{
                removeComments:true,
                collapseWhitespace:false
            }
        })*/
    ]
}else{
    entryConfig=[
         './src/entry/entryWebpack/app.js'
     ];
    output={
        path: path.join(__dirname,"/public/dist/"),
        publicPath: url+"/dist/",
        filename: "js/app.js",
        chunkFilename:'js/[id].chunk.js'
    };
    plugin=[
        new webpack.optimize.CommonsChunkPlugin('js/comment.js'),
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
            favicon:'./src/view/icon/easy.ico',
            filename:'/view/index.html',
            template:'./src/view/index.html',
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
                test: /\.less$/,
                loader: ExtractTextPlugin.extract(
                    // activate source maps via loader query
                    'css?sourceMap!' +
                    'less?sourceMap'
                )
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
        extensions:['','.js','.json','.less','.css','.scss','.ejs','.png','.jpg'],
        alias:{
            jquery:__dirname+'/node_modules/jquery/dist/jquery.min.js',
            bootstrap_js:__dirname+'/node_modules/bootstrap/dist/js/bootstrap.min.js',
            bootstrap_css:__dirname+'/node_modules/bootstrap/dist/css/bootstrap.min.css',
            ng_grid_css:__dirname+'/node_modules/ng-grid/ng-grid.css',
            ng_grid_debug_js:__dirname+'/node_modules/ng-grid/ng-grid-2.0.1.debug.js',
            ng_grid_js:__dirname+'/node_modules/ng-grid/ng-grid-2.0.1.min.js'
        }
    },
    plugins: plugin
};



//entry:{
//    p1:'./page1',
//    p2:'./page2',
//    p3:'./page3',
//    ap1:'./admin/page1',
//    ap2:'./admin/page2'
//},
//new webpack.optimize.CommonsChunkPlugin('js/comment.js'),
// new CommonsChunkPlugin("admin-commons.js", ["ap1", "ap2"]),
// new CommonsChunkPlugin("commons.js", ["p1", "p2", "admin-commons.js"])
// 在不同页面用<script>标签引入如下js:
// page1.html: commons.js, p1.js
// page2.html: commons.js, p2.js
// page3.html: p3.js
// admin-page1.html: commons.js, admin-commons.js, ap1.js
// admin-page2.html: commons.js, admin-commons.js, ap2.js