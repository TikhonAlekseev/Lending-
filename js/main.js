$(document).ready(function() {
  var pull = $("#navigation__toggle");
  var nav = $(".navigation ul");
  $(pull).on("click", function(e) {

    e.preventDefault();

    nav.slideToggle();
 
    $(this).toggleClass("navigation__toggle-button-active");
  });

  $(window).resize(function() {
    var w = $(window).width();
    if (w > 720 && nav.is(":hidden")) {
      nav.removeAttr("style");
    }
  });
  
  var w = $(window).width();
  if (w < 992) {
    $("nav.navigation a").on("click", function() {
      nav.slideToggle();
    });
  }

  $("#top__slider").owlCarousel({
    singleItem: true,
    navigation: true,
    theme: "top__slider-theme",
    navigationText: ["", ""],
    slideSpeed: 1200
  });

  $(
    "nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id"
  ).mPageScroll2id({
    highlightSelector: "nav a"
  });
});
