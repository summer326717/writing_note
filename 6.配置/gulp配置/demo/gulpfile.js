var gulp = require('gulp'),
  gulpSequence = require('gulp-sequence').use(gulp), //逐步执行命令
  less = require('gulp-less'), //编译less
  htmlmin = require('gulp-htmlmin'), //压缩html
  imagemin = require('gulp-imagemin'), //压缩图片
  cssmin = require('gulp-minify-css'), //压缩css
  clean = require('gulp-clean'), //清除文件
  rev = require('gulp-rev-append'), //添加版本号
  uglify = require('gulp-uglify'), //压缩js
  pump = require('pump'), //定位错误
  babel = require("gulp-babel"), //
  es2015 = require("babel-preset-es2015"),
  browserSync = require('browser-sync').create(), //自动刷新
  watch = require('gulp-watch'),
  reload = browserSync.reload;

gulp.task('image', function () {
  gulp.src('newweb/images/*.{png,jpg,gif,ico}')
    .pipe(imagemin())
    .pipe(gulp.dest('src/images'));
});
gulp.task('less', function () {
  gulp.src('newweb/static/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('newweb/static/css'))
});
gulp.task('css', function () {
  gulp.src('newweb/static/css/*.css')
    .pipe(cssmin())
    .pipe(gulp.dest('src/static/css/'));
});
/*gulp.task('index', function () { //复制文件
  return gulp.src('newweb/config.json', {
      base: 'newweb'
    })
    .pipe(gulp.dest('src'));
});*/
gulp.task('copy', function (cb) {
  return gulp.src('newweb/common/**', {
      base: 'newweb'
    })
    .pipe(gulp.dest('src'));
});
gulp.task('es6', function () {
  gulp.src(['newweb/static/js/*.js'])
    .pipe(babel({
      presets: [es2015]
    }))
    .pipe(uglify())
    .pipe(gulp.dest('src/static/js'));
});
gulp.task('html', function () {
  var options = {
    removeComments: true, //清除HTML注释
    collapseWhitespace: true, //压缩HTML
    minifyJS: true, //压缩页面JS
    minifyCSS: true //压缩页面CSS
  };
  gulp.src('newweb/**/*.html')
    .pipe(htmlmin(options))
    .pipe(rev(options))
    .pipe(gulp.dest('src/'));
});
gulp.task('clean', function () {
  return gulp.src('src', {
    read: false
  }).pipe(clean());
});
// 静态服务器
gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "./newweb"
    }
  });
});
// 代理
/*gulp.task('browser-sync', function () {
  browserSync.init({
    proxy: "http://192.168.17.225:8080/"
  });
});*/
gulp.task('build', gulpSequence(['html', 'es6', 'copy', 'css', 'image']));
gulp.task('watch', function () {
  gulp.watch([
    'newweb/static/css/*.css',
    'newweb/**/*.html',
    'newweb/static/js/*.js'
  ], reload);
});
gulp.task('run', ['browser-sync', 'watch']);
/*
1.gulp less
2.gulp run
3.gulp build
4.gulp clean
*/