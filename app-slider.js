//slider-slick
  
// $('.slider-block').slick({
// 	infinite: true,
// 	dots: true,
// 	slidesToShow: 3,
// 	slidesToScroll: 1,
// 	responsive: [
// 	    {
// 	      breakpoint: 768,
// 	      settings: {
// 	        slidesToShow: 2,
// 	      }
// 	    },
// 	    {
// 	      breakpoint: 480,
// 	      settings: {
// 	        slidesToShow: 1,
// 	      }
// 	    }
//     ]
// });

  $('.slider-block').slick({

    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

//   $(window).on('load resize orientationchange', function() {
//     $('.slider-block').each(function(){
//         var $carousel = $(this);
//         /* Initializes a slick carousel only on mobile screens */
//         // slick on mobile
//         if ($(window).width() > 768) {
//             if ($carousel.hasClass('slick-initialized')) {
//                 $carousel.slick('unslick');
//             }
//         }
//         else{
//             if (!$carousel.hasClass('slick-initialized')) {
//                 $carousel.slick({
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     mobileFirst: true,
//                 });
//             }
//         }
//     });
// });

// $('.carousel').slick({
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     mobileFirst: true,
//     responsive: [
//           {
//                   breakpoint: 768,
//                   settings: 'unslick'
//           }
//     ]
//   });