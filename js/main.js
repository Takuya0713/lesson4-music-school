// 全て読み込み終わったらAOSを動作させる
AOS.init();

// ハンバーガーボタン部分
/*　ハンバーガーボタンをクリックしたら、
    1.三本線を×にする
    2.ドロワーメニューが表示されるようにする
　*/

// 【ハンバーガーボタンイベントに関する動作】
// ハンバーガーボタンをクリックした時に他のクリックイベントが広がるのを防ぐ
$(document).ready(function () {
  $("#hb-block").click(function (event) {
    event.stopPropagation();
    // クラス名「」にactiveが付与されていたら、メニューを閉じて付与されていない状況なら開く。
    if ($(".hb").hasClass("active")) {
      closeMenu();
    } else {
      openMenu();
    }
  });
});

// メニューのリンクをクリックしたら閉じる処理
/* .header__navのaタグをクリックしたらメニューを閉じる（aタグのリンククリック後にメニューを閉じる動作） */
$(".header__nav a").click(function () {
  closeMenu();
});

// アコーディオンメニュー部分
$(".p-faq__accordion-question").click(function () {
  $(this).toggleClass("active");
  $(this).next().slideToggle();
  // 0430この後に「display: flex;align-items: center;」を追加したい
});

// 「生徒さんたちの声」slickスライド部分
$(function () {
  $(".p-voice__wrapper").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    infinite: true,
    arrows: false,
  });
});

// すべて読み込み終わってからAOSを実行
window.onload = function () {
  AOS.init({
    offset: 300,
    duration: 500,
    easing: "ease-out",
    once: true,
  });
};
