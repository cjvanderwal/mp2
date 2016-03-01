$(document).ready(function(){

  //create navbar background when scrolling past intro
  $(window).scroll(function() {
    var scrolled_val = $(document).scrollTop();
    var nav_val = $("#navbar").height();
    var curr_height = scrolled_val + nav_val;
    var height = $('#modal').offset().top

    if (curr_height >= height - 60) {
      $(".top-bar").addClass('need_background');
    }
    else {
      $(".top-bar").removeClass('need_background');
    }
  });

  //highlight current nav-bar position
  $(window).scroll(function() {
    var scrolled_val = $(document).scrollTop();
    var nav_val = $('.top-bar').height();
    var curr_height = scrolled_val + nav_val;

    var list = $('#nav-bar').find('a');
    for (var i = 0; i < list.length; i++) {
      var top = $(list[i].hash).offset().top;
      var bot = $(list[i].hash).offset().top + $(list[i].hash).height();

      if (curr_height >= top && curr_height <= bot) {
        $(list[i]).addClass('active');
      }
      else {
        $(list[i]).removeClass('active');
      }
    }
  if($(window).scrollTop() + $(window).height() >= $(document).height() - 100) {
    $('#bottom').addClass('active');
    $('#not-bottom').removeClass('active');
  }
});

  //bobble the intro arrow up and down
  window.setInterval(bobble, 2000);
  var moved = false
  function bobble() {
      if(moved == true){
        $("#bobble-button").animate({top: '25px',}, 2000);
        moved = false;
      }
      else{
        $("#bobble-button").animate({top: '75px',}, 2000);
        moved = true;
      }
  }

  //smooth scroll on links
  //cite: https://css-tricks.com/snippets/jquery/smooth-scrolling/
  $(window).load(function(){
    $('a[href^="#"]').on('click',function (e) {
      var target = this.hash;
      var $target = $(target);
      e.preventDefault();

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top - 30
      }, 500, 'swing', function () {
          window.location.hash = target;
      });
    });
  });

  //slick carousel
  $(document).ready(function(){
    $('#carousel-content').eq($('.slick-active').index()).addClass('animated fadeInDown');
    $('#carousel-content').slick({
      infinite: true,
      speed: 700,
      fade: true,
      swipeToSlide: true,
      responsive: [{
        breakpoint: 420,
        settings: "unslick"
      }]
    });
  });



});
