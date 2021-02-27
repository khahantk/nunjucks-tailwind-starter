const gulp = require("gulp");

const prebuild = function (done) {
  global.production = true;
  if (done) {
    done();
  }
};
gulp.task("prebuild", prebuild);

module.exports = prebuild;
