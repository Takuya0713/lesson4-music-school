// 全て読み込み終わったらAOSを動作させる
AOS.init();

// 【ハンバーガーボタンイベント】
// ハンバーガーボタンをクリックした時に他のクリックイベントが広がるのを防ぐ
$(document).ready(function () {
  $("#hb-block").click(function (event) {
    event.stopPropagation();
    // クラス名「」にactiveが付与されていたら、メニューを閉じて付与されていない状況なら開く。
    // if ($(".hb").hasClass("active")) {
    if ($(".p-header__hb").hasClass("active")) {
      closeMenu();
    } else {
      openMenu();
    }
  });
});

// メニューのリンクをクリックしたら閉じる処理
/* .header__navのaタグをクリックしたらメニューを閉じる（aタグのリンククリック後にメニューを閉じる動作） */
$(".p-header__nav a").click(function () {
  closeMenu();
});

// ナビゲーションメニューを開く（ハンバーガーボタンとヘッダー部分にactiveがついたら発動）
function openMenu() {
  $(".p-header__hb").addClass("active");
  $(".p-header__nav").addClass("active");
  $(".p-header__nav-wrapper").addClass("active");
  $(".p-header__nav-wrapper").addClass("u-bg-red");
}

// ナビゲーションメニューを閉じる
function closeMenu() {
  if ($(window).width() <= 767) {
    $(".p-header__hb").removeClass("active");
    $(".p-header__nav").removeClass("active");
  }
}

// アコーディオンメニュー
$(".p-faq__accordion-question, .p-faq__accordion-answer").click(function () {
  // アコーディオンの質問または回答部分をクリックした時に
  $(this)
    .closest(".p-faq__accordion-list")
    .find(".p-faq__accordion-answer")
    .slideToggle();
  // アコーディオンリストから一番近い（liタグ）、回答を表示する
  $(this)
    .closest(".p-faq__accordion-list")
    .find(".p-faq__accordion-question")
    .toggleClass("active");
});

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

// 現在のスクロール位置
var scrollTop = $(this).scrollTop();
// ウィンドウの高さ
var windowHeight = $(window).height();
// ヘッダーの位置を取得
var headerHeight = $("#header").outerHeight();
// フッターの位置を取得
var footerOffsetTop = $(".footer").offset().top;
// トップへ戻るボタン
var scrollTopBtn = $(".c-fix-area, .scroll-top-btn"); // トップへ戻るボタン
// お問い合わせボタン
var contactBtn = $(".c-form-btn");

// ヘッダーを過ぎたら表示する
$(window).scroll(function () {
  if ($(this).scrollTop() > headerHeight) {
    scrollTopBtn.fadeIn();
  } else {
    scrollTopBtn.fadeOut();
  }
  if ($(this).scrollTop() > headerHeight) {
    contactBtn.fadeIn();
  } else {
    contactBtn.fadeOut();
  }
});

// フッターに入ったら非表示にする
$(window).scroll(function () {
  if ($(this).scrollTop() > footerOffsetTop ) {
    scroll.fadeOut();
  } else {
    scroll.fadeIn();
  }
  if ($(this).scrollTop() > footerOffsetTop ) {
    contactBtn.fadeOut();
  } else {
    contactBtn.fadeIn();
  }
});

