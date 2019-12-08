(function ($) {
    "use strict";

    $.widget('vaimo.SlideShow', {
        options: {
            interval: 5000
        },
        _create: function() {
            // Left in for backwards compatibility. Widget was used in indirect way beforehand
            if (this.options.selector) {
                this.element = $(this.options.selector);
            }

            var $carousel = this.element;

            $carousel.carousel({
                interval: this.options.interval
            });

            if (typeof $carousel.swiperight != 'undefined' && typeof $carousel.swipeleft != 'undefined') {
                $carousel.swiperight(function () {
                    $(this).carousel('prev');
                });

                $carousel.swipeleft(function () {
                    $(this).carousel('next');
                });
            }
        }
    });
})(jQuery);