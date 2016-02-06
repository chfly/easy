/**
 * Created by chenwei on 2016/1/29.
 */
var gulp = require('gulp'),
    notify = require('gulp-notify'),
    less = require('gulp-less'),
    aliasCombo = require('gulp-alias-combo'),
    webpack=require('gulp-webpack'),
    react=require('gulp-react');
//move html
gulp.task('tpls', function(){
    return gulp.src('./src/angular/tpls//**/*.html')
        .pipe(gulp.dest('public/tpls/'))
        .pipe(notify({message : 'Html task complete'}))
})
//jsx tranceform
gulp.task('jsx',function(done){
    return gulp.src('./src/react/entry/component//**/*.js')
        .pipe(react())
        .pipe(gulp.dest('./src/react/build/component/'))
        //.pipe(notify({message:"jsx task compelete"}))
        .on('end', done);
});
gulp.task('server',function(done){
    return gulp.src('./src/react/entry/entryServer//**/*.js')
        //.pipe(aliasCombo({
        //    baseUrl:__dirname+'/node_modules/',
        //    alias:{
        //        jquery:'jquery/dist/jquery.min.js',
        //        bootstrap:'bootstrap/dist/js/bootstrap.min.js'
        //    }
        //}))
        .pipe(react())
        .pipe(gulp.dest('./src/react/build/server/'))
        .on('end', done);
    //.pipe(notify({message:"server task compelete"}))
});
gulp.task('webpack',function(done){
    webpack(require('./webpack.config'))
        .pipe(gulp.dest('public/'))
        .on('end', done);
    //.pipe(notify({message:"Webpack task compelete"}))
});
gulp.task('watch',function(){
    gulp.watch('./src/angular/less//**/*.less', ['less']);
    gulp.watch('./src/react/entry/component//**/*.js',['jsx','server','webpack']);
    gulp.watch('./src/react/entry/entryServer//**/*.js',['server']);
    gulp.watch('./src/react/entry/entryWebpack//**/*.js',['webpack']);
    gulp.watch('./src/angular//**/*.js',['webpack']);
    //gulp.watch('public/tpls//**/*.html',['reload-dev']);
});
gulp.task('default',['tpls','jsx','server','webpack','watch']);
gulp.task('webpackServer',function(done){
    return gulp.src('./src/react/entry/entryWebpack//**/*.js')
        //.pipe(aliasCombo({
        //    baseUrl:__dirname+'/node_modules/',
        //    alias:{
        //        jquery:'jquery/dist/jquery.min.js',
        //        bootstrap:'bootstrap/dist/js/bootstrap.min.js'
        //    }
        //}))
        .pipe(react())
        .pipe(gulp.dest('./src/react/build/webpack/'))
        .on('end', done);
    //.pipe(notify({message:"server task compelete"}))
});
gulp.task('test',function(done){
    return gulp.src('./src/react/entry/entryWebpack/app.js')
        .pipe(webpack({
            watch:true,
            module: {
                loaders: [ {
                    test: /\.jsx?$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel',
                    query: {
                        presets: ['react', 'es2015']
                    }
                }]
            }
        }))
        .pipe(gulp.dest('./src/react/test/'))
        .on('end', done);
    //.pipe(notify({message:"test task compelete"}))
});

//var livereload = require('gulp-livereload'),
//connect = require('gulp-connect');

//server
//gulp.task('angularServer', function() {
//    connect.server({
//        root: 'public/',
//        port: 3001,
//        livereload: true
//    });
//});
//reload server
//gulp.task('reload-dev',function() {
//    gulp.src('public/tpls//**/*.html')
//        .pipe(connect.reload());
//});