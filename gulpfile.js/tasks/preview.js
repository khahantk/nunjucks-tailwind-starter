const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const config = require("../config");
const reload = browserSync.reload;

const server = () => {
  browserSync.init({
    server: {
      baseDir: config.root.dest,
    },
  });
};
// Static server
gulp.task("preview", server);
module.exports = server;
