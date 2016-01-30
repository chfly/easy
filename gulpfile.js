/**
 * Created by chenwei on 2016/1/29.
 */
var gulp = require('gulp'),
    notify = require('gulp-notify'),
    webpack=require('gulp-webpack'),
    react=require('gulp-react');

gulp.task('jsx',function(){
  return gulp.src('./src/component//**/*.js')
       .pipe(react())
       .pipe(gulp.dest('./src/build/component/'))
        .pipe(notify({message:"jsx task compelete"}))
});
gulp.task('server',function(){
   return gulp.src('./src/entryServer//**/*.js')
        .pipe(react())
        .pipe(gulp.dest('./src/build/server/'))
       .pipe(notify({message:"server task compelete"}))
});

gulp.task('test',function(callback){
   return gulp.src('./src/entryWebpack/app.js')
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
    gulp.src('./src/entryWebpack//**/*.js')
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest('public/'))
    .pipe(notify({message:"webpack task compelete"}))
});
gulp.task('watch',function(){
    gulp.watch('./src/component//**/*.js',['jsx','server','webpack']);
    gulp.watch('./src/entryServer//**/*.js',['server']);
    gulp.watch('./src/entryWebpack//**/*.js',['webpack'])
});

gulp.task('default',['jsx','server','webpack']);