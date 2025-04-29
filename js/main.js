// AOS.init();
// アコーディオンメニュー部分
$(".p-faq__accordion-question").click(function () {
  $(this).toggleClass("active");
  $(this).next().slideToggle();
});
// 「生徒さんたちの声」スライド部分
$(function () {
  $(".p-voice__wrapper").slick({
    autoplay: true, // 自動再生
    autoplaySpeed: 4000, // 再生速度（ミリ秒設定） 1000ミリ秒=1秒
    speed: 1000,
    infinite: true, // 無限スライド
    arrows: false, // 矢印
  });
});
