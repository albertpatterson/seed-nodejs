const gulp = require("gulp");
const mocha = require('gulp-mocha');

gulp.task('test', () =>
  gulp.src(['src/test/**/*.spec.js'], {read: false})
    .pipe(mocha({reporter: 'spec', exit: true}))
    // .on('error', console.error)
);

gulp.task('watch', ()=>{
  gulp.watch(['src/**/*.js']).on('change', (e)=>{
    gulp.start('test')
  })
});