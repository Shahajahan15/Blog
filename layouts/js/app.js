/* Theme Name:Modenta | Responsive HTML Blog Template
   Author: Shreethemes
   Version: 1.0.0
   Created: May 2019
   File Description: Main JS file of the template
*/

// Add scroll class
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".sticky").addClass("nav-sticky");
        } else {
            $(".sticky").removeClass("nav-sticky");
        }
    });

    $('.navbar-toggle').on('click', function (event) {
            $(this).toggleClass('open');
            $('#navigation').slideToggle(400);
        });
    $('.navigation-menu > li > a').on('click', function (e) {
          if ($(window).width() < 992) {
              e.preventDefault();
              $(this).parent('li').toggleClass('open').find('.submenu:first').toggleClass('open');
          }
      });

//Scrollspy
    $(".navbar-nav").scrollspy({
        offset: 50
    });

// Portfolio filter
    $(window).on('load', function () {
        var $container = $('.projects-wrapper');
        var $filter = $('#filter');
        // Initialize isotope 
        $container.isotope({
            filter: '*',
            layoutMode: 'masonry',
            animationOptions: {
                duration: 750,
                easing: 'linear'
            }
        });

        // Filter items when filter link is clicked
        $filter.find('a').on("click",function() {
            var selector = $(this).attr('data-filter');
            $filter.find('a').removeClass('active');
            $(this).addClass('active');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    animationDuration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });
            return false;
        });
    });

// Magnific Popup
    $('.mfp-image').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        }
    });

//Owl Carousel
    $("#owl-demo").owlCarousel({
        autoPlay: 3000,
        stopOnHover: true,
        navigation: false,
        paginationSpeed: 1000,
        goToFirstSpeed: 2000,
        singleItem: true,
        autoHeight: true,
    });

//SLICK SLIDER
//3 Pic Slider
    $('.center').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 2,
                }
            },
            
            {
                breakpoint: 426,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1,
                }
            }
        ]
      });
      
//2 pic Slider
    $('.multiple-slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
          {
              breakpoint: 769,
              settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '0px',
                  slidesToShow: 2,
              }
          },
          
          {
              breakpoint: 426,
              settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '0px',
                  slidesToShow: 1,
              }
          }
      ]
    });
//AUTOplay
  $('.autoplay').slick({
      slidesToShow: 8,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
  });

//SINGLE POST
  $('.single-item').slick({
      autoplay: true,
      autoplaySpeed: 2000,
  });