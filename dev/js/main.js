
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

  $(".select-item").click( function(e) {
    e.preventDefault();
    $(this).closest(".select").toggleClass('active').find(".select-drop").slideToggle(300);
  });
  $(".select-option").click( function() {
    let textOption = $(this).text();
    $(this).addClass('active').siblings().removeClass('active');
    $(this).closest(".select").removeClass('active').find(".select-item").addClass('active').find("span").text(textOption);
    $(this).closest(".select").find(".select-drop").slideUp(300);
  });
})
