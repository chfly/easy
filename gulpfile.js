/**
 * Created by chenwei on 2016/1/29.
 */
var gulp = require('gulp'),
    notify = require('gulp-notify'),
    aliasCombo = require('gulp-alias-combo'),
    webpack=require('gulp-webpack'),
    react=require('gulp-react');

gulp.task('jsx',function(){
  return gulp.src('./src/entry/component//**/*.js')
       .pipe(react())
       .pipe(gulp.dest('./src/build/component/'))
        .pipe(notify({message:"jsx task compelete"}))
});
gulp.task('server',function(){
   return gulp.src('./src/entry/entryServer//**/*.js')
       //.pipe(aliasCombo({
       //    baseUrl:__dirname+'/node_modules/',
       //    alias:{
       //        jquery:'jquery/dist/jquery.min.js',
       //        bootstrap:'bootstrap/dist/js/bootstrap.min.js'
       //    }
       //}))
        .pipe(react())
        .pipe(gulp.dest('./src/build/server/'))
       .pipe(notify({message:"server task compelete"}))
});
gulp.task('webpackServer',function(){
    return gulp.src('./src/entry/entryWebpack//**/*.js')
        //.pipe(aliasCombo({
        //    baseUrl:__dirname+'/node_modules/',
        //    alias:{
        //        jquery:'jquery/dist/jquery.min.js',
        //        bootstrap:'bootstrap/dist/js/bootstrap.min.js'
        //    }
        //}))
        .pipe(react())
        .pipe(gulp.dest('./src/build/webpack/'))
        .pipe(notify({message:"server task compelete"}))
});

gulp.task('test',function(callback){
   return gulp.src('./src/entry/entryWebpack/app.js')
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
            .pipe(gulp.dest('./src/test/'))
    .pipe(notify({message:"test task compelete"}))
});

gulp.task('webpack',function(callback){
    gulp.src('./src/entry/entryWebpack//**/*.js')
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest('public/'))
    .pipe(notify({message:"webpack task compelete"}))
});
gulp.task('watch',function(){
    gulp.watch('./src/entry/component//**/*.js',['jsx','server','webpack']);
    gulp.watch('./src/entry/entryServer//**/*.js',['server']);
    gulp.watch('./src/entry/entryWebpack//**/*.js',['webpack'])
});

gulp.task('default',['jsx','server','webpack','webpackServer']);