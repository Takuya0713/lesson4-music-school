// 全て読み込み終わったらAOSを動作させる
AOS.init();

// 【ハンバーガーボタンイベント】
$(document).ready(function () {
  $("#hb-block").click(function (event) {
    event.stopPropagation();
    if ($(".c-hamburger").hasClass("active")) {
      closeMenu();
    } else {
      openMenu();
    }
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

    // 以下のナビゲーション部分は0.5秒掛けて元に戻す
    setTimeout(function () {
      $(".l-header__nav").removeClass("active");
      $(".l-header__nav-wrapper").removeClass("active");
      $(".l-header__nav-wrapper").css("right", "");
    }, 500);
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
    // 閉じる場合
    $answer.slideToggle(500);
    setTimeout(function () {
      $question.removeClass("active");
    }, 0);
    // 0924 疑似要素の矢印が0.5秒待たずに元に戻るよう修正
  } else {
    // 開く場合：アイコンを先に回転してからコンテンツを開く
    $question.addClass("active");
    $answer.slideToggle(500);
  }
});

// 「生徒さんたちの声」slickスライド部分
// 750px以下になったときのみslick機能を使用する
// https://www.genius-web.co.jp/blog/web-programming/how-to-use-slick-js-to-apply-sliders-on-a-smartphone-to-the-rest-of-the-picture-on-a-pc.html
$(function () {
  function sliderSetting() {
    $(".slick-next")
      .not(".slick-initialized")
      .slick({
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
        infinite: true,
        arrows: true,
        prevArrow: $(".p-voice__arrow--prev"),
        nextArrow: $(".p-voice__arrow--next"),
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
  }
  // 上述の関数を実行
  sliderSetting();
  // windowサイズが変更されたときに再度関数の内容を実行
  $(window).resize(function () {
    sliderSetting();
  });
});

// トップへ戻るボタン
// 少しスクロールしたら現れる
// 最初は非表示、特定の位置までスクロールしたらスクロールボタンを表示する
var scrollTopBtn = $(".c-button__wrapper");
scrollTopBtn.hide();
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    scrollTopBtn.fadeIn();
  } else {
    scrollTopBtn.fadeOut();
  }
});
