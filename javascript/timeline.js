(function ($) {
    $.fn.cntl = function (options) {
        var settings = $.extend({
            revealbefore: 800,
            anim_class: 'cntl-animate',
        }, options);
        return this.each(function () {
            var statelist = $(this).find('.cntl-state');
            var bar_fill = $(this).find('.cntl-bar-fill');
            var states = [];
            var tbf = 0;
            function setupElements() {
                num = [185, 435, 750, 1080, 1400, 2000, 2450, 2745, 3050, 3300, 3650, 4050, 4300, 4600,]/*时间轴各元素的位置*/

                for (var i = 0; i < statelist.length; i++) {
                    states[i] = {};
                    states[i]['top'] = num[i] + 100;
                    states[i]['elm'] = $(statelist[i]);
                };

                revealElements();

            }

            function revealElements() {

                var windowtop = $(window).scrollTop();
                var windowbtm = windowtop + $(window).height();

                for (var i = 0; i < states.length; i++) {

                    if (states[i].top > windowtop && states[i].top < windowbtm) {
                        if (!states[i].elm.hasClass(settings.anim_class) && $.isFunction(settings.onreveal)) {
                            settings.onreveal.call(this, states[i].elm);
                        }

                        states[i].elm.addClass(settings.anim_class);
                        var h = states[i].elm.position().top;

                        if (h > tbf) {
                            tbf = h;
                        }
                        bar_fill.height(tbf);
                    }
                };
            }
            $(window).on('scroll', revealElements);
            $(window).on('load', setupElements)
        });
    }

}(jQuery));