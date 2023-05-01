$('.btn').click(function(){
    $(this).toggleClass("click");
    $('.sidebar').toggleClass("show");
  });
    $('.feat-btn').click(function(){
      $('nav ul .feat-show').toggleClass("show");
      $('nav ul .first').toggleClass("rotate");
    });
    $('.serv-btn').click(function(){
      $('nav ul .serv-show').toggleClass("show1");
      $('nav ul .second').toggleClass("rotate");
    });
    $('.shor-btn').click(function(){
      $('nav ul .shor-show').toggleClass("show2");
      $('nav ul .third').toggleClass("rotate");
    });
    /*underundermeny, Slett dette om det er problemer med tredje undermeny*/
    $('.thir-btn').click(function(){
      $('nav ul .thir-show').toggleClass("show3");
      $('nav ul .fourth').toggleClass("rotate");
    });
    $('nav ul li').click(function(){
      $(this).addClass("active").siblings().removeClass("active");
    });