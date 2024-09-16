/*
 **	Plugin for counter shortcode
 */
(function($) {"use strict"; $.fn.countTo = function(options) {options = $.extend({}, $.fn.countTo.defaults, options || {}); var loops = Math.ceil(options.speed / options.refreshInterval), increment = (options.to - options.from) / loops; return $(this).each(function() {var _this = this, loopCount = 0, value = options.from, interval = setInterval(updateTimer, options.refreshInterval); function updateTimer() {value += increment; loopCount++; $(_this).html(value.toFixed(options.decimals)); if (typeof(options.onUpdate) === 'function') {options.onUpdate.call(_this, value); } if (loopCount >= loops) {clearInterval(interval); value = options.to; if (typeof(options.onComplete) === 'function') {options.onComplete.call(_this, value); } } } }); }; $.fn.countTo.defaults = {from: 0, to: 100, speed: 1000, refreshInterval: 100, decimals: 0, onUpdate: null, onComplete: null }; })(jQuery);