/*!
 * jquery.morphdom.js - A thin jQuery wrapped around patrick-steele-idem/morphdom
 * @version v1.0.0
 * @link https://github.com/james2doyle/jquery.morphdom.js
 * @license MIT
 * @copyright (c) 2016
 */

(function($) {

    var morphdom = require('morphdom');

    $.fn.morphdom = function(node, options) {

        // default options
        $.fn.morphdom.defaults = {};

        if (typeof(options) === 'function') {
            callback = options;
        }

        if (!this.length) { return this; }

        var opts = $.extend(true, {}, $.fn.morphdom.defaults, options);

        if (typeof(node) === 'object') {
            node = node[0];
        }

        return $(morphdom(this[0], node, opts));
    };

})(jQuery);
