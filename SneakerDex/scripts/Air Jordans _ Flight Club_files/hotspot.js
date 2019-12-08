(function ($) {
    "use strict";

    $.widget('vaimo.SlideShow', $.vaimo.SlideShow,  {
        _create: function() {
            this._super();

            this.element.find('.hotspot').has('.hotspot-content').on('click',function() {
                $(this).find('.hotspot-content').fadeToggle();
            });
        }
    });
})(jQuery);