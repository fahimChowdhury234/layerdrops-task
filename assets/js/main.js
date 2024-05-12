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

   $(window).on("load", function () {
      thmSwiperInit();
   });
})(jQuery);
