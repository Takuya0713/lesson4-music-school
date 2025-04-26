// AOS.init();
// アコーディオンメニュー部分
$('.p-faq__accordion-question').click(function() {
  $(this).toggleClass('active');
  // $('.p-faq__accordion-answer').toggleClass('active');
  $(this).next().slideToggle();
  });