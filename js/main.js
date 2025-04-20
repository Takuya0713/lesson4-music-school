AOS.init();
// アコーディオンメニュー部分
$('.p-faq__accordion-question').click(function() {
    $(this).next().slideToggle();
    $(this).toggleClass('active');
  });