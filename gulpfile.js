const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imageResize = require('gulp-image-resize');

const src = 'sources/';
const dest = 'optimized/';

function optimizeImages() {
  return gulp.src([src + '*.{jpg,png}'])
    .pipe(imageResize({
      width: 2000,
      upscale : false,
      // Additional options (optional):
      // - crop: true, // Crop to fit within dimensions
      // - quality: 80,  // Adjust image quality (0-100)
      // - format: 'jpg',  // Specify output format
    }))
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