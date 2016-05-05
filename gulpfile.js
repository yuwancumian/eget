var gulp = require('gulp');
var watch = require('gulp-watch');
var babel = require('gulp-babel');

gulp.task('babel',function() {
	gulp.src('src/*.js')
	.pipe(babel({
			presets: ['es2015']
		}))
	.pipe(gulp.dest('lib/'))
})

gulp.task('watch',function() {
	gulp.watch('src/*.js',['babel']);
})

gulp.task('default',['watch']);