const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

const src = 'sources/';
const dest = 'optimized/';

function optimizeImages() {
  return gulp.src([src + '*.{jpg,png}'])
    .pipe(imagemin([
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
    ]))
    .pipe(gulp.dest(dest));
}

gulp.task('default', optimizeImages);

module.exports = {
  optimizeImages
}