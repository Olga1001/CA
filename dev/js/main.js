
if (window.matchMedia('(max-width: 991px)').matches) {
  $('.card-list_v2').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    variableWidth: true,
    focusOnSelect: true
  });
}
if (window.matchMedia('(max-width: 575px)').matches) {
  $(".slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    variableWidth: true,
    focusOnSelect: true
  });
}

$(document).ready(function () {
  // burger menu
  $(".burger").click( function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(".header-nav").slideToggle(300);
  });
})
