// AOS.init();
// アコーディオンメニュー部分
$(".p-faq__accordion-question").click(function () {
  $(this).toggleClass("active");
  $(this).next().slideToggle();
});
// 「生徒さんたちの声」スライド部分
// $(document).ready(function () {
//   $(".p-voice__wrapper").slick({
//     rtl: true, // これで右から左にスライド
//     autoplay: true, // 自動再生する場合
//     autoplaySpeed: 3000, // スライドの間隔（ミリ秒）
//     dots: true, // ドットナビゲーションを表示
//     arrows: true, // 矢印を表示
//   });
// });

// $(function () {
//   // 【スライダー】
//   $(".p-voice__wrapper").slick({
//     // この中にパラメータを記載
//     autoplay: true, // 自動再生
//     autoplaySpeed: 4000, // 再生速度（ミリ秒設定） 1000ミリ秒=1秒
//     speed: 1000,
//     infinite: true, // 無限スライド
//     arrows: false, // 矢印
//   });
// });
