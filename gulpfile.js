var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('sass', function() {
  return sass('app/sass/app.scss')
    .pipe(gulp.dest('app/css'))
    .pipe(reload({ stream:true }));
});

// watch Sass files for changes, run the Sass preprocessor with the 'sass' task and reload
gulp.task('serve', ['sass'], function() {
  gulp.watch(["app/*.html", "app/css/**/*.css"]).on('change', browserSync.reload);
  gulp.watch('app/sass/**/*.scss', ['sass']);

  browserSync.init({
    server: {
      baseDir: './app/'
    }
  });

  gulp.watch('app', ['sass'], reload);
});
