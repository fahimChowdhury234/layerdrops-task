(function ($) {
   "use strict";

   function thmSwiperInit() {
      // swiper slider
      if ($(".thm-swiper__slider").length) {
         $(".thm-swiper__slider").each(function () {
            let elm = $(this);
            let options = elm.data("swiper-options");
            let thmSwiperSlider = new Swiper(elm, options);
         });
      }
   }

   function thmOwlInit() {
      // owl slider

      if ($(".thm-owl__carousel").length) {
         $(".thm-owl__carousel").each(function () {
            let elm = $(this);
            let options = elm.data("owl-options");
            let thmOwlCarousel = elm.owlCarousel(options);
         });
      }

      if ($(".thm-owl__carousel--custom-nav").length) {
         $(".thm-owl__carousel--custom-nav").each(function () {
            let elm = $(this);
            let owlNavPrev = elm.data("owl-nav-prev");
            let owlNavNext = elm.data("owl-nav-next");
            $(owlNavPrev).on("click", function (e) {
               elm.trigger("prev.owl.carousel");
               e.preventDefault();
            });

            $(owlNavNext).on("click", function (e) {
               elm.trigger("next.owl.carousel");
               e.preventDefault();
            });
         });
      }
   }

   $(window).on("load", function () {
      thmSwiperInit();
   });
})(jQuery);
