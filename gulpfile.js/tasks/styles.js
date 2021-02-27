const postcss = require("gulp-postcss");
const gulp = require("gulp");
const gulpif = require("gulp-if");
const cssnano = require("gulp-cssnano");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

const config = require("../config");
const styles = () => {
  const paths = {
    src: config.styles.src,
    dest: config.styles.dest,
  };
  return gulp
    .src(paths.src)
    .pipe(postcss([require("postcss")(tailwindcss()), autoprefixer()]))
    .pipe(gulpif(global.production, cssnano()))
    .pipe(gulp.dest(paths.dest));
};
gulp.task("styles", styles);
