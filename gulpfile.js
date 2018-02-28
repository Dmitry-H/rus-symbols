var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	autoprefixer = require("gulp-autoprefixer"),
	del = require("del");
	babel = require("gulp-babel"),
	watcher = require("gulp-watch");;

function server() {
    browserSync({
        server: {
            baseDir: "./dist"
        },
        browser: "chrome"
    });
    browserSync.watch("./dist/**/*.*", browserSync.reload);
}

function styles() {
    return gulp.src("./src/css/*.css")
        .pipe(autoprefixer({
            browsers: ["last 3 versions"],
            cascade: false
        }))
        .pipe(gulp.dest("./dist/css"));
}

function pages() {
	return gulp.src("./src/*.html")
		.pipe(gulp.dest("./dist"));
}

function scripts() {
	return gulp.src("./src/js/*.js")
		.pipe(babel({
			presets: ["env"],
			"plugins": ["transform-proto-to-assign"]
		}))
		.pipe(gulp.dest("./dist/js"));
}

gulp.task("build", function () {
	runSequence("clean", ["images", "fonts", "styles", "pages", "scripts", "php"])
});

function clear() {
    return del(["./dist/**/*.*", "./dist/**", "!./dist"]);
}

function watch() {
    watcher("./src/*.html", pages);
    watcher("./src/css/*.css", styles);
    watcher("./src/js/*.js", scripts);
}

gulp.task("default", gulp.series(
    clear,
    gulp.parallel(pages, styles, scripts),
    gulp.parallel(watch, server)
));

exports.server = server;
exports.styles = styles;
exports.pages = pages;
exports.scripts = scripts;
exports.clear = clear;
exports.watch = watch;