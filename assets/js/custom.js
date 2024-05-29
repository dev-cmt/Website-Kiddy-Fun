/*-----------------------------------------------------------------------------------
    Template Name: Kiddyfun
    Description: Kids Toys Store and Baby Shop HTML5 Template
    Author: Codezion
    Author URI: https://www.templatemonster.com/authors/codezion/
    Version: 1.0
-----------------------------------------------------------------------------------*/
(function($) {
    'use strict';
    $(".hamburger>.hamburger_btn").on('click', function() {
        $(".header .navigation").toggleClass('open');
        $(this).toggleClass('active');
    });
    $(window).on('load', function() {
        $(document).ready(function() {
             $(".animated-dashes").append("<svg class='inner-dashed-border' height='100%' width='100%' preserveAspectRatio='none'><rect  width='100%' height='100%'></rect></svg>");
        });
    });
    // Mobile Menu
    $(".header .menu-item-has-children > a").on('click', function(e) {
        var submenu = $(this).next(".sub-menu");
        e.preventDefault();
        submenu.slideToggle(200);
    });
    // search trigger
    $(".search-trigger").on('click', function(e) {
        e.preventDefault();
        $(".search-form-wrapper").toggleClass('open');
    });
    // testimonials_slider
    $('.testimonials_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,
        dotsClass: "slick-dots d-flex mt-5",
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    // product details
    $('.product_slider').slick({
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product_slider_nav'
    });
    $('.product_slider_nav').slick({
        dots: false,
        arrows: false,
        vertical: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        focusOnSelect: true,
        verticalSwiping: true,
        asNavFor: '.product_slider',
        responsive: [{
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    verticalSwiping: false,
                    vertical: false
                }
            }
        ]
    });
    // Sticky Header
    var header = $(".can-sticky");
    var footer = $(".ft-sticky");
    var headerHeight = header.innerHeight();
    var FooterHeight = footer.innerHeight();

    function doSticky() {
        if (window.pageYOffset > headerHeight) {
            header.addClass("sticky");
        } else {
            header.removeClass("sticky");
        }
        if (window.pageYOffset > FooterHeight) {
            footer.addClass("d-flex");
        } else {
            footer.removeClass("d-flex");
        }
    }
    doSticky();
    //On scroll events
    $(window).on('scroll', function() {
        doSticky();
    });
    if ($(".back-to-top").length) {
        $(".back-to-top").on("click", function() {
            var target = $(this).attr("data-target");
            // animate
            $("html, body").animate({
                    scrollTop: $(target).offset().top,
                },
                1000
            );

            return false;
        });
    };
    $('.popup-video').magnificPopup({
        type: 'iframe',
    });
    $('.popup-image').magnificPopup({
        type: 'image',
    });
    // Current year
    var d = new Date();
    document.getElementById("year").innerHTML = d.getFullYear();
    // Range Slider
    $(function() {
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 500,
            values: [75, 300],
            slide: function(event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount").val("$" + $("#slider-range").slider("values", 0) +
            " - $" + $("#slider-range").slider("values", 1));
    });
    // Add / Subtract Quantity
    $(".quantity button").on('click', function() {
        var qty = $(this).closest('.quantity').find('input');
        var qtyVal = parseInt(qty.val());
        if ($(this).hasClass('qty-add')) {
            qty.val(qtyVal + 1);
        } else {
            return qtyVal > 1 ?
                qty.val(qtyVal - 1) :
                0;
        }
    });
    // Toggle eye
    function VisiblePassword() {
        var togglePassword = document.querySelector('#password_eye');
        var password = document.querySelector('#password_value');
        if (togglePassword) {
            togglePassword.addEventListener('click', function(e) {
                // toggle the type attribute
                const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
                password.setAttribute('type', type);
                // toggle the eye / eye slash icon
                this.classList.toggle('fa-eye-slash');
            });
        }
    }
    VisiblePassword();
})(jQuery);