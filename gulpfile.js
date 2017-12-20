var gulp = require('gulp');
var browserSync = require('browser-sync').create('html5-hot-reload');


// for develop
// watch files for changes and reload
gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: './',
      directory: true,
    },
    logFileChanges: true,
    port: 3000,
    // 禁用自动打开浏览器
    open: false,
  });

  gulp.watch(['*.*', 'chap*/*.*', 'chap*/**/*.*'], browserSync.reload);
});

// for demo or examples
gulp.task('example', function() {
  browserSync.init({
    server: {
      baseDir: './',
      directory: true,
    },
    port: 3000,
    // 启用自动打开浏览器
    open: true,
  });
});

// https://browsersync.io/docs/options#option-host
