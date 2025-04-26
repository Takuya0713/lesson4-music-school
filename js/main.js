// AOS.init();
// アコーディオンメニュー部分
$('.p-faq__accordion-question').click(function() {
  $(this).toggleClass('active');
  $(this).next().slideToggle();
  });