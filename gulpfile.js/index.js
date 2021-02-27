const gulp = require("gulp");
const path = require("path");
const requireDir = require("require-dir");
process.env.PWD = process.env.PWD || path.resolve(process.cwd());
requireDir("./tasks");

gulp.task(
  "default",
  gulp.series(
    "clean",
    gulp.parallel("fonts", "images", "styles", "scripts", "html"),
    gulp.parallel("server", "watch")
  )
);
gulp.task(
  "build",
  gulp.series(
    "clean",
    gulp.parallel("fonts", "images", "styles", "scripts", "html")
  )
);
module.exports = gulp.task("default");
