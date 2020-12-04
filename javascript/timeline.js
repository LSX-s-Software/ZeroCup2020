(function ($) {

    $.fn.cntl = function (options) {

        /* default settings */
        var settings = $.extend({
            revealbefore: 800,
            /* this is the amount of "scroll padding" to allow (the more, the later the state will be revealed) */
            anim_class: 'cntl-animate',
            /* the anim class, this class should have animation rules in css */
        }, options);




        return this.each(function () {

            var statelist = $(this).find('.cntl-state');
            var bar_fill = $(this).find('.cntl-bar-fill');
            var states = [];
            var tbf = 0;


            function setupElements() {
                num = [
                    182.5841522216797,
                    432.5643310546875,
                    682.5444946289062,
                    1181.524658203125,
                    1691.7474365234375,
                    2366.3017578125,
                    2723.702880859375,
                    3244.989990234375,
                    3684.19287109375,
                    4081.098876953125,
                    4495.6484375,
                    4963.26220703125,
                    5383.306640625
                ]

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
                        if (
                            !states[i].elm.hasClass(settings.anim_class) &&
                            $.isFunction(settings.onreveal)) {
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