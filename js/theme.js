;(function($) {
    "use strict"; 
    
    //* Navbar Fixed  
    function navbarFixed(){
        if ( $('.main_header_area').length ){ 
            $(window).on('scroll', function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= 295) {
                    $(".main_header_area").addClass("navbar_fixed");
                } else {
                    $(".main_header_area").removeClass("navbar_fixed");
                }
            });
            
            // toggle_menu
            $(".menu-opener").on('click', function () {
                $(".toggle_menu").toggleClass("active");
            });
            $("section").on('click', function () {
                $(".toggle_menu").removeClass("active");
            });  
        };
    };   
    
    //* Magnificpopup js
    function magnificPopup() {
        if ($('.popup-youtube').length) { 
            //Video Popup
            $('.popup-youtube').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false, 
                fixedContentPos: false,
            });   
        };
    };
    
    //* Isotope js
    function protfolioIsotope(){
        if ( $('.work_area').length ){ 
            // Activate isotope in container
            $(".works_inner").imagesLoaded( function() {
                $(".works_inner").isotope({
                    layoutMode: 'masonry',  
                }); 
            }); 
            
            // Add isotope click function 
            $(".works_filter li").on('click',function(){
                $(".works_filter li").removeClass("active");
                $(this).addClass("active"); 
                var selector = $(this).attr("data-filter");
                $(".works_inner").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false,
                    }
                });
                return false;
            });  
        };
    }; 
    
    //* Counter Js 
    function counterUp(){
        if ( $('.countarup_area').length ){ 
            $('.counter').counterUp({
                delay: 10,
                time: 400
            });
        };
    };
    
    //* Blog Js 
    function owl_Carousel(){
        if ( $('.blog_slide').length ){ 
            $('.blog_carousel').owlCarousel({
                loop: true,
                margin: 20,
                nav: true,
                items: 2.5,  
                navText: ["<i class='flaticon-back'></i>","<i class='flaticon-next'></i>"],
                responsive: {
                    0: {
                        items: 1, 
                        margin: 0,
                    },
                    767: {
                        items: 2, 
                    },
                    1000: {
                        items: 3, 
                    },
                    1199: {
                        items: 1.8, 
                    },
                    1299: {
                        items: 2, 
                    },
                    1700: {
                        items: 2.5, 
                    }
                }
            })
        };
    }; 
    
    //* Parallaxmouse js
    function parallaxMouse() {
        if ($('#parallax').length) {
            var scene = document.getElementById('parallax');
            var parallax = new Parallax(scene); 
        };
    };    
    
    // Scroll to top
    function scrollToTop() {
        if ($('.scroll-top').length) {  
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 200) {
                    $('.scroll-top').fadeIn();
                } else {
                    $('.scroll-top').fadeOut();
                }
            }); 
            //Click event to scroll to top
            $('.scroll-top').on('click', function () {
                $('html, body').animate({
                    scrollTop: 0
                }, 1000);
                return false;
            });
        }
    }
    
    // Preloader JS
    function preloader(){
        if( $('.preloader').length ){
            $(window).on('load', function() {
                $('.preloader').fadeOut();
                $('.preloader').delay(50).fadeOut('slow');  
            })   
        }
    }
    
    /*Function Calls*/ 
    new WOW().init();
    navbarFixed ();  
    scrollToTop ();
    magnificPopup ();
    protfolioIsotope ();
    parallaxMouse ();
    counterUp ();
    owl_Carousel (); 
    preloader ();
    
})(jQuery);