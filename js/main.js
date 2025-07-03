// 全て読み込み終わったらAOSを動作させる
AOS.init();

// 【ハンバーガーボタンイベント】
$(document).ready(function () {
  $("#hb-block").click(function (event) {
    event.stopPropagation();
    // ハンバーガーボタンをクリックした時に他のクリックイベントが広がるのを防ぐ
    if ($(".c-hamburger").hasClass("active")) {
      closeMenu();
    } else {
      openMenu();
    }
    // クラス名「」にactiveが付与されていたら、メニューを閉じて付与されていない状況なら開く。
    // activeになっていたらクローズ、なっていない場合は逆の動作を行う
  });
});

// メニューのリンクをクリックしたら閉じる処理
/* .header__navのaタグをクリックしたらメニューを閉じる（aタグのリンククリック後にメニューを閉じる動作） */
$(".l-header__nav a").click(function () {
  closeMenu();
});

// ナビゲーションメニューを開く（ハンバーガーボタンとヘッダー部分にactiveがついたら発動）
function openMenu() {
  // ハンバーガーボタン部分→ハンバーガーの矢印が動く
  $(".c-hamburger").addClass("active");
  // ナビゲーションメニュー表示部分（親要素と子要素）
  // 以下2つをactiveにすることで中身が表示される
  $(".l-header__nav").addClass("active");
  $(".l-header__nav-wrapper").addClass("active");
}

// ナビゲーションメニューを閉じる
function closeMenu() {
  if ($(window).width() <= 767) {
    // 非表示状態（-110%右寄り）にする
    $(".l-header__nav-wrapper").css("right", "-110%");
    $(".c-hamburger").removeClass("active");

    // 以下のナビゲーション部分は0.3秒掛けて元に戻す
    setTimeout(function () {
      $(".l-header__nav").removeClass("active");
      $(".l-header__nav-wrapper").removeClass("active");
      $(".l-header__nav-wrapper").css("right", "");
    }, 300);
  }
}
// ハンバーガーメニュー以外のところをクリックしても閉じるようにする
if ($(window).width() <= 767) {
  $(document).click(function (event) {
    if (
      //ハンバーガーアイコン以外
      !$(event.target).closest(".c-hamburger").length &&
      //ナビゲーション以外
      !$(event.target).closest(".l-header__nav").length
      // （closestは直近の要素を取得するという意味）
    ) {
      closeMenu();
    }
  });
}

// アコーディオンメニュー
$(".p-faq__accordion-question, .p-faq__accordion-answer").click(function () {
  var $question = $(this)
    .closest(".p-faq__accordion-list")
    .find(".p-faq__accordion-question");
  var $answer = $(this)
    .closest(".p-faq__accordion-list")
    .find(".p-faq__accordion-answer");

  // 現在の状態を確認
  var isOpen = $answer.is(":visible");

  if (isOpen) {
    // 閉じる場合：コンテンツを先に閉じてからアイコンを回転
    $answer.slideToggle(500);
    setTimeout(function () {
      $question.removeClass("active");
    }, 500);
  } else {
    // 開く場合：アイコンを先に回転してからコンテンツを開く
    $question.addClass("active");
    $answer.slideToggle(500);
  }
});

// アコーディオン修正前
// $(".p-faq__accordion-question, .p-faq__accordion-answer").click(function () {
//   // アコーディオンの質問または回答部分をクリックした時に
//   $(this)
//     .closest(".p-faq__accordion-list")
//     .find(".p-faq__accordion-answer")
//     .slideToggle(500);
//   // アコーディオンリストから一番近い（liタグ）、回答を表示する
//   $(this)
//     .closest(".p-faq__accordion-list")
//     .find(".p-faq__accordion-question")
//     .toggleClass("active");
// });

// 「生徒さんたちの声」slickスライド部分
// 750px以下になったときのみslick機能を使用する
// https://www.genius-web.co.jp/blog/web-programming/how-to-use-slick-js-to-apply-sliders-on-a-smartphone-to-the-rest-of-the-picture-on-a-pc.html
$(function () {
  function sliderSetting() {
    var width = $(window).width();
    if (width <= 750) {
      // class名にslick-nextと書かれたslick機能を働かせる
      $(".slick-next").not(".slick-initialized").slick({
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
        infinite: true,
        arrows: false,
      });
    } else {
      $(".slide.slick-initialized").slick("unslick");
    }
  }
  // 上述の関数を実行
  sliderSetting();
  // windowサイズが変更されたときに再度関数の内容を実行
  $(window).resize(function () {
    sliderSetting();
  });
});

// トップへ戻るボタン
var scrollTopBtn = $(".c-button__wrapper");
// 少しスクロールしたら現れる
// 最初は非表示、特定の位置までスクロールしたらスクロールボタンを表示する
scrollTopBtn.hide();
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    scrollTopBtn.fadeIn();
  } else {
    scrollTopBtn.fadeOut();
  }
});
