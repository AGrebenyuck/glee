$(function(){

  $('.related-products__content').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="../images/icons/arrow-right-blue.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../images/icons/arrow-right-blue.svg" alt=""></button>',
    infinite: false
  });

  $('.product-tabs__top-item').on('click', function(e){
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $('.shop-content__view-grid').on('click',function(){
    $('.shop-content__view-list').removeClass('shop-content__view--active');
    $('.shop-content__view-grid').addClass('shop-content__view--active');
    $('.products-item').removeClass('products-item--list');
    $('.pagination').removeClass('pagination--list');
  });
  $('.shop-content__view-list').on('click',function(){
    $('.shop-content__view-grid').removeClass('shop-content__view--active');
    $('.shop-content__view-list').addClass('shop-content__view--active');
    $('.products-item').addClass('products-item--list');
    $('.pagination').addClass('pagination--list');
  });

  $('.product-content__form-input,.shop-content__sort-select').styler({});

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    vertical: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true  
  });

  $('.recent-products__item-star').rateYo({
    starWidth: "12px",
    ratedFill: "#ffcc00",
    normalFill: "#d6d6d6",
    spacing: "8px",
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12px" height="12px" viewBox="0 0 12 12">'+
    '<path d="M 11.289062 4.070312 L 8 4.019531 L 6.691406 0.648438 C 6.4375 0.0273438 5.558594 0.0273438 5.304688 0.648438 L 3.996094 4.019531 L 0.707031 4.070312 C 0.0234375 4.109375 -0.25 4.964844 0.277344 5.394531 L 2.945312 7.707031 L 2.035156 10.867188 C 1.855469 11.515625 2.558594 12.050781 3.136719 11.707031 L 5.996094 10.140625 L 8.859375 11.703125 C 9.4375 12.050781 10.140625 11.515625 9.960938 10.863281 L 9.050781 7.707031 L 11.71875 5.394531 C 12.246094 4.960938 11.972656 4.105469 11.289062 4.070312 Z M 11.289062 4.070312 "/>'+
    '</svg>'
  });

  $('.star').rateYo({
    starWidth: "18px",
    ratedFill: "#ffcc00",
    normalFill: "#d6d6d6",
    spacing: "13px",
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="940.688px" height="940.688px" viewBox="0 0 940.688 940.688">'+
	  '<path d="M885.344,319.071l-258-3.8l-102.7-264.399c-19.8-48.801-88.899-48.801-108.6,0l-102.7,264.399l-258,3.8'+
		'c-53.4,3.101-75.1,70.2-33.7,103.9l209.2,181.4l-71.3,247.7c-14,50.899,41.1,92.899,86.5,65.899l224.3-122.7l224.3,122.601'+
		'c45.4,27,100.5-15,86.5-65.9l-71.3-247.7l209.2-181.399C960.443,389.172,938.744,322.071,885.344,319.071z"/>'+
    '</svg>',
  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.filter-price__min').text('$'+ data.from + '.00');      
      $('.filter-price__max').text('$'+ data.to + '.00');    
    },
    onChange: function (data) {
      $('.filter-price__min').text('$'+ data.from + '.00');      
      $('.filter-price__max').text('$'+ data.to + '.00');
    }
  });

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