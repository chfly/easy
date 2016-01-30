/**
 * Created by chenwei on 2016/1/29.
 */
//仅仅处理js文件的合并与压缩，其他交给gulp
var webpack=require('webpack');
//获取入口文件，生产文件名到文件路径的mapentry：{ news-detail: /../Document/project/.../news-detail.js}
function getEntry(){
    var jsPath = path.resolve(srcDir, 'js')
    var dirs = fs.readdirSync(jsPath);
    var matchs = [], files = {};
    dirs.forEach(function (item) {
        matchs = item.match(/(.+)\.js$/);
        if (matchs) {
            files[matchs[1]] = path.resolve(srcDir, 'js', item);
        }
    });
    return files;
}

module.exports={
    devtool:"source-map",
    //entry:getEntry(),
    entry:{
        p1:'./page1',
        p2:'./page2',
        p3:'./page3',
        ap1:'./admin/page1',
        ap2:'./admin/page2'
    },
    output:{
        path:path.join(__dirname,'public/assets/'),
        publicPath:"assets/",
        filename:"js/[name].js"
    },
    module:{
        loaders:[

        ]
    },
    resolve:{
        extensions:['','.js','.json','.css','.scss','.ejs','.png','.jpg'],
        alias:{
            jquery:__dirname+'/node_modules/jquery/dist/jquery.min.js',
            bootstrap_js:__dirname+'/node_modules/bootstrap/dist/js/bootstrap.min.js',
            bootstrap_css:__dirname+'/node_modules/bootstrap/dist/css/bootstrap.min.css'
        }
    },
    plugins:[
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        //new webpack.optimize.CommonsChunkPlugin('js/comment.js'),

        new CommonsChunkPlugin("admin-commons.js", ["ap1", "ap2"]),
        new CommonsChunkPlugin("commons.js", ["p1", "p2", "admin-commons.js"])

// 在不同页面用<script>标签引入如下js:
// page1.html: commons.js, p1.js
// page2.html: commons.js, p2.js
// page3.html: p3.js
// admin-page1.html: commons.js, admin-commons.js, ap1.js
// admin-page2.html: commons.js, admin-commons.js, ap2.js
    ]
}