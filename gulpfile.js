const gulp = require("gulp");
const postcss = require("gulp-postcss");
const cssvars = require("postcss-css-variables");
const cssImport = require("postcss-import");
const cssDiscardComments = require("postcss-discard-comments");
const sass = require("gulp-sass")(require("sass"));
var clean = require("gulp-clean");

const PATHS = {
  material3CSS: { src: "src/material3/*.css", dest: "dist" },
};

gulp.task("build:material3", function () {
  return gulp
    .src(PATHS.material3CSS.src)
    .pipe(postcss([cssImport, cssvars, cssDiscardComments]))
    .pipe(gulp.dest(PATHS.material3CSS.dest));
});

gulp.task("clean:dist", () => {
  return gulp.src("dist/**/*.css", { read: false }).pipe(clean());
});
