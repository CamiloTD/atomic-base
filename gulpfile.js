const gulp = require('gulp');
const pug = require("gulp-pug");
const coffee = require("gulp-coffeescript");
const styl = require("gulp-stylus");

function compilePug () {
    return gulp.src('src/**/*.pug')
               .pipe(pug({
                   basedir: 'src',
                   pretty: true
               }))
               .pipe(gulp.dest('build'));
};

function compileCoffee () {
    return gulp.src('src/**/*.coffee').pipe(coffee()).pipe(gulp.dest('build'));
};

function compileStylus () {
    return gulp.src('src/**/*.styl').pipe(styl()).pipe(gulp.dest('build'));
};

gulp.task('compile', async function () {
    console.log('Compiling pug...');

    await compilePug();
    console.log('Compiling coffeee...');
    await compileCoffee();
    console.log('Compiling stylus...');
    await compileStylus();
    
    console.log('Done!');
});

gulp.task('watch', async function () {
    console.log('Compiling pug...');

    await compilePug();
    console.log('Compiling coffeee...');
    await compileCoffee();
    console.log('Compiling stylus...');
    await compileStylus();
    
    console.log('Done!');
    
    gulp.watch(['src/**/*.pug'], compilePug);
    gulp.watch(['src/**/*.styl'], compileStylus);
    gulp.watch(['src/**/*.coffee'], compileCoffee);
});

require('pug').filters.stylus = require('pug-stylus')(function (options, args) {
    options.filename = args.filename;
});