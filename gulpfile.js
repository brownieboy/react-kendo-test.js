var gulp = require("gulp");
var del = require('del');
var inject = require('gulp-inject');

var PATHS = {
    src: {
        root: './src',
        jsons: './src/jsons',
        css: './src/css',
        fonts: './src/fonts'
    },
    build: {
        root: "./build",
        jsons: './build/jsons',
        css: './build/css',
        fonts: './build/fonts',
        js: "./build/js"
    },
    devServer: "m:/html/mike/replace/table-test"
};

//scripts
// Copy assets from src to build folder, cleaning that folder out first
gulp.task('cleanBuild', function() {
    return del(PATHS.build.root + "/**/*");
});
gulp.task('copyJSONs', function() {
    gulp.src(PATHS.src.jsons + '/**/*')
        .pipe(gulp.dest(PATHS.build.jsons));
});
gulp.task('copyCSS', function() {
    gulp.src(PATHS.src.css + '/**/*')
        .pipe(gulp.dest(PATHS.build.css));
});
gulp.task('copyFonts', function() {
    gulp.src(PATHS.src.fonts + '/**/*')
        .pipe(gulp.dest(PATHS.build.fonts));
});
gulp.task('copyMisc',  function() {
   gulp.src([PATHS.src.root + '/favicon.ico'])
   .pipe(gulp.dest(PATHS.build.root));
});
gulp.task('injectBuildRefs', function() {
    var srcHTMLFile = gulp.src(PATHS.build.root + "/index.html");
    var refsToInject = gulp.src([PATHS.build.js + "/vendor.js"], {
        read: false
    });
    return srcHTMLFile.pipe(inject(refsToInject, {relative: true}))
        .pipe(gulp.dest('./build'));
});

gulp.task('copyHTMLAndInjectBuildRefs', function() {
    var refsToInject = gulp.src([PATHS.build.js + "/vendor.js"], {
        read: false
    });

    gulp.src([PATHS.src.root + '/index.html'])
    .pipe(gulp.dest(PATHS.build.root))
    .pipe(inject(refsToInject, {relative: true}))
        .pipe(gulp.dest('./build'));
});



gulp.task('buildAssets', ['copyJSONs', 'copyCSS', 'copyFonts', 'copyMisc', 'copyHTMLAndInjectBuildRefs']);


// Copy build to dev server, cleaning that folder out first
//  Pass the force option to dev to enable to delete stuff outside of the current working
// directory.  Use with caution!!
gulp.task('cleanDevServer', function() {
    return del(PATHS.devServer + "/**/*", {
        force: true
    });
});
gulp.task('copyBuildToDevServer', ['cleanDevServer'], function() {
    gulp.src(PATHS.build.root + '/**/*')
        .pipe(gulp.dest(PATHS.devServer));
});

gulp.task('cleanDevServerThenCopyBuild', ['cleanDevServer', 'copyBuildToDevServer']);
