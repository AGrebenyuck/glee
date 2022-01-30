$(function(){

  $('.header-content__inner').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: 2000
  });

  var mixer = mixitup('.products__items', {
    selectors: {
        control: '.products__filter-btn'
    }
  });
  var mixerdesign = mixitup('.design__items', {
    selectors: {
      control: '.design__filter-btn'
    }
  });
})