import gulp from 'gulp';
import sass from 'gulp-dart-sass';
import browser from 'browser-sync';

const styles = () => {
  return gulp.src('sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
};

const watcher = () => {
  gulp.watch('sass/**/*.scss', gulp.series(styles));
  gulp.watch('source/*.html').on('change', browser.reload);
};

const server = (done) => {
  browser.init({
    server: {
      baseDir: './'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

export default gulp.series(
  styles, server, watcher
);
