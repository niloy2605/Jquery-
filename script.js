$(document).ready(function () {
  $(".slick-parent").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    arrows: true,
    nextArrow:
      '<span class="left"><i class="fa-solid fa-chevron-left"></i></span>',
    prevArrow:
      '<span class="right"><i  class="fa-solid fa-chevron-right"></i></span>',
  });

  new VenoBox({
    selector: ".my-video-links",
  });

   mixitup('.test',

   {
    "animation": {
        "duration": 535,
        "nudge": true,
        "reverseOut": false,
        "effects": "fade translateX(-19%) translateZ(-100px) rotateX(90deg)"
    }
}
   );

   AOS.init();

   

// $('.preant').slick({
//   dots: true,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 1,
//   centerMode: true,
//   centerPadding: '0',
//   arrows: true,
//   variableWidth: true,
     
//   nextArrow:
//       '<span class="left"><i class="fa-solid fa-chevron-left"></i></span>',
//     prevArrow:
//       '<span class="right"><i  class="fa-solid fa-chevron-right"></i></span>'

// });

$('.preant').slick({
  centerMode: true,
  centerPadding: '0',
  slidesToShow: 3,
  arrows: true,
  nextArrow:
       '<span class="left"><i class="fa-solid fa-chevron-left"></i></span>',
     prevArrow:
      '<span class="right"><i  class="fa-solid fa-chevron-right"></i></span>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1
      }
    }
  ]
});


});