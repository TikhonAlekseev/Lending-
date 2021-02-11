$(document).ready(function() {
  // Создаем переменые для кнопки и для меню
  var pull = $("#navigation__toggle");
  var nav = $(".navigation ul");

  // Описываем событие при нажатии на кнопку
  $(pull).on("click", function(e) {
    // Отменяем стандартное поведение ссылки в браузере
    e.preventDefault();

    // Открываем/Скрываем меню
    nav.slideToggle();
    // добавляем active
    $(this).toggleClass("navigation__toggle-button-active");
  });

  // При изменении размера окна, в большую сторону, если меню было с крыто, показываем его.
  $(window).resize(function() {
    var w = $(window).width();
    if (w > 720 && nav.is(":hidden")) {
      nav.removeAttr("style");
    }
  });
  // Эта функция скрывает меню после нажатия на какой либо пунтк и прокрутки
  var w = $(window).width();
  if (w < 992) {
    $("nav.navigation a").on("click", function() {
      nav.slideToggle();
    });
  }

  // Вызов слайдера вверху
  $("#top__slider").owlCarousel({
    singleItem: true,
    navigation: true,
    theme: "top__slider-theme",
    navigationText: ["", ""],
    slideSpeed: 1200
  });

  //slide2id - плавная прокрутка по ссылкам внутри страницы
  $(
    "nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id"
  ).mPageScroll2id({
    highlightSelector: "nav a"
  });
});
