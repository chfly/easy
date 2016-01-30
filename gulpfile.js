/**
 * Created by chenwei on 2016/1/29.
 */
var gulp = require('gulp'),
    notify = require('gulp-notify'),
    webpack=require('gulp-webpack'),
    react=require('gulp-react');

gulp.task('jsx',function(){
  return gulp.src('./src/admin/component//**/*.js')
       .pipe(react())
       .pipe(gulp.dest('./src/admin/build/'))
        .pipe(notify({message:"jsx task compelete"}))
});
gulp.task('route',function(){
   return gulp.src('./src/admin/entryR//**/*.js')
        .pipe(react())
        .pipe(gulp.dest('./src/admin/route/'))
       .pipe(notify({message:"route task compelete"}))
});

gulp.task('test',function(callback){
   return gulp.src('./src/admin/entry/app.js')
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
            .pipe(gulp.dest('./src/admin/test/'))
    .pipe(notify({message:"test task compelete"}))
});

gulp.task('webpack',function(callback){
    gulp.src('./src/admin/entryW//**/*.js')
    .pipe(webpack(require('./webpack.admin.config')))
    .pipe(gulp.dest('public/admin/build/'))
    .pipe(notify({message:"webpack task compelete"}))
});
gulp.task('watch',function(){
    gulp.watch('./src/admin/component//**/*.js',['jsx','route','webpack']);
    gulp.watch('./src/admin/entryR//**/*.js',['route']);
    gulp.watch('./src/admin/entryW//**/*.js',['webpack'])
});

gulp.task('default',['jsx','route','webpack']);