$(document).ready(function(){
  $(".owl-carousel").owlCarousel(
      {
          items:3,
          center:true,
          dotsEach:true,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: true,
        nav:false,
        navText:['<','>']
      }
  );
});
