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

        if (!this.length) { return this; }

        // default options
        $.fn.morphdom.defaults = {};

        var opts = $.extend(true, {}, $.fn.morphdom.defaults, options);

        if (typeof(node) === 'object') {
            node = node[0];
        }

        var results = $(morphdom(this[0], node, opts));

        if (typeof(options) === 'function') {
            options(results);
        }

        return results;
    };

})(jQuery);
