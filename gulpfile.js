var gulp = require('gulp'),
	spritesmith = require('gulp.spritesmith'),
	del = require('del');

gulp.task('clean',function(cb){
	del(['src/**/sprite-*.*'], cb);
})

gulp.task('sprite', function () {
  gulp.src('icons/*-1.*').pipe(spritesmith({
    imgName: 'sprite-1.png',
    cssName: 'sprite-1.less',
    padding: 10
  })).pipe(gulp.dest('src/sprite')),
  gulp.src('icons/*-2.*').pipe(spritesmith({
    imgName: 'sprite-2.png',
    cssName: 'sprite-2.less',
    padding: 5
  })).pipe(gulp.dest('src/sprite')),
  gulp.src('icons/*-3.*').pipe(spritesmith({
    imgName: 'sprite-3.png',
    cssName: 'sprite-3.less',
    padding: 15
  })).pipe(gulp.dest('src/sprite'));
  gulp.src('icons/*-4.*').pipe(spritesmith({
    imgName: 'sprite-4.png',
    cssName: 'sprite-4.less',
    padding: 15
  })).pipe(gulp.dest('src/sprite'));
});

gulp.task('default',['clean','sprite']);

gulp.task('classify',function(){
	gulp.src('src/sprite/*.{png,jpg}').pipe(gulp.dest('src/img'));
	gulp.src('src/sprite/*.less').pipe(gulp.dest('src/less'));
});


