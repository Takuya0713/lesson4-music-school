// gulpとgulp-sassモジュールを読み込む
var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));
var autoprefixer = require("autoprefixer");
var sourcemaps = require("gulp-sourcemaps"); //0411
var postcss = require("gulp-postcss");
// Sassのタスクを設定し「{}」の中にSassコンパイルに必要な処理を記述
gulp.task("sass", function () {
  // コンパイル元となるscssファイルを指定
  // return gulp.src('./scss/**/*.scss')
  return (
    gulp
      .src("./scss/**/*.scss")
      .pipe(sourcemaps.init()) // 0411sourcemapsの初期化
      //コンパイル時のアウトプットスタイルを「expanded」に指定
      .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
      .pipe(postcss([autoprefixer()])) // コンパイル先のディレクトリを指定
      .pipe(sourcemaps.write("./")) // 0411 .mapファイルを出力（CSSと同じ場所）
      .pipe(gulp.dest("./css"))
  );
});

// ファイル更新の度に自動コンパイルするタスク「sass:watch」を定義
gulp.task("sass:watch", function () {
  gulp.watch("./scss/**/*.scss", gulp.series("sass"));
});
