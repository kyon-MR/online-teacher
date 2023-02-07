'use strict'; {

  $(function(){
    $('li a').click(function() {
      let href = $(this).attr("href");
      let pos = $(href).offset().top;
      $('body, html').animate({scrollTop: pos}, 500);
      return false;
    });

    $(window).scroll(function() {
      if($(this).scrollTop() > 50) {
        $('header').addClass("bgColor");
      } else {
        $('header').removeClass("bgColor");
      }
    });

    $('header #sp-menu').click(function() {
      $(this).hide();
      $('header #menu').show().addClass("show");
      $('header #modal').addClass("mdShow").animate({opacity: 1}, 500).show();
      $('header #sp-close').show();
    });

    $('header #sp-close').click(function() {
      $(this).hide();
      $('header #menu').hide();
      $('header #modal').removeClass("mdShow").hide();
      $('header #sp-menu').show();
    });


  });

}