!function(o){"use strict";o(window).width();jQuery(document).ready((function(o){o(".humbarger").on("click",(function(){o(".menu-wrapper").toggleClass("show-menu"),o(this).parents(".header").toggleClass("show-menu")})),o(".main-menu li a").on("click",(function(){o(".menu-wrapper").removeClass("show-menu"),o(".header").removeClass("show-menu")}));o(".animate-me").waypoint((function(e){"down"==e&&(o(this.element).addClass("animated"),this.destroy())}),{offset:"90%"});var e=(new Date).getFullYear();o(".update-year").append(e),o(window).enllax(),o("#scroll-me").on("click",(function(){o("html, body").animate({scrollTop:o("#about-me").offset().top},1e3)})),o(".hire-me").on("click",(function(){o("html, body").animate({scrollTop:o("#contact").offset().top},1e3)})),o("#me-working-skill .single-skill").each((function(){var e=o(this).find("span.title").innerWidth();o(this).find("span.line").css({width:"calc(100% - "+(e+30)+"px)"})}))})),o(window).scroll((function(){o(this).scrollTop()>20?o(".header").addClass("sticky"):o(".header").removeClass("sticky")}));var e=o(".portfolio-paging-status");o(".portfolio-content-wrapper").on("init reInit afterChange",(function(o,t,s,l){var n=(s||0)+1;e.text(n+"/"+t.slideCount)})),o(".portfolio-content-wrapper").slick({slidesToShow:1,autoplay:!1,slidesToScroll:1,asNavFor:".portfolio-img",speed:2e3,prevArrow:'<button type="button" class="slick-prev"> <img src="images/arrow-right-white.png" alt="arrow"></button>',nextArrow:'<button type="button" class="slick-next"> <img src="images/arrow-right-white.png" alt="arrow"></button>',pauseOnHover:!0}),o(".portfolio-img").slick({slidesToShow:1,slidesToScroll:1,asNavFor:".portfolio-content-wrapper",dots:!1,fade:!0,speed:1500,arrows:!1,focusOnSelect:!1,pauseOnHover:!0}),o(".single-testimonial").slick({slidesToShow:1,autoplay:!0,slidesToScroll:1,asNavFor:".author-img-wrapper",speed:2500,arrows:!1,dots:!0,pauseOnHover:!0}),o(".author-img-wrapper").slick({slidesToShow:1,slidesToScroll:1,asNavFor:".single-testimonial",dots:!1,fade:!0,speed:3e3,arrows:!1,focusOnSelect:!1,pauseOnHover:!0}),o(window).scroll((function(){o(this).scrollTop()>200?(o(".scroll-top").fadeIn(),o(".scroll-top").removeClass("not-visible")):o(".scroll-top").fadeOut()})),o(".scroll-top").on("click",(function(e){e.preventDefault(),o("html, body").animate({scrollTop:0},500)}))}(jQuery);