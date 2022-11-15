jQuery(function($){
    $(document).ready(function() {
        $(".first-slider").slick({
            centerMode: true,
            centerPadding: '1px',
            slidesToShow: 3,
            responsive: [
              {
                breakpoint: 996,
                settings: {
                  centerMode: true,
                  centerPadding: '3px',
                  slidesToShow: 5
                }
              },
              {
                breakpoint: 768,
                settings: {
                  centerMode: true,
                  centerPadding: '85px',
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 480,
                settings: {
                  centerMode: true,
                  centerPadding: '85px',
                  slidesToShow: 1
                }
              }
            ]
          });
      });

      $(document).ready(function() {
        $(".second-slider").slick({
            centerMode: true,
            centerPadding: '1px',
            slidesToShow: 3,
            // prevArrow: '<div class="first-prev"></div>',
            // nextArrow: '<div class="first-next"></div>',
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  centerMode: true,
                  centerPadding: '30px',
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 480,
                settings: {
                  centerMode: true,
                  centerPadding: '60px',
                  slidesToShow: 1
                }
              }
            ]
          });
      });
});
      