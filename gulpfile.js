var gulp = require('gulp');
var qunit = require('node-qunit-phantomjs');

gulp.task('test', function() {
    qunit('./js_tests/fixture.html');
});

gulp.task('default', ['test']);
