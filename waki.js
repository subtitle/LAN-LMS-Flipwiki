/*

waki.js

*/

(function($){

	var urls = {
		local : "/",
		lib : "http://library.kiwix.org/wikipedia_en_wp1/A/",
		main : "http://en.wikipedia.org/"
	};
	var wakiscreen = $('<div />').attr('id', 'wakiscreen').css('display','none').appendTo( $('body'));

	$.fn.waki = function (options){
		var settings = $.extend({
			loc: "full"
		}, options);

		return this.each( function(){
			// do for each
			$(this).click(function(e){
				var wakiwin = $('<iframe />',{
					name: 'wakiwindow',
				});
				wakiwin.attr('src',lib + $(this).text());
				wakiwin.appendTo(wakiscreen);
				e.preventDefault();
	            e.stopPropagation();
	            window.alert("hello "+$(this).text());
	            wakiscreen.css({
	            	'display': 'block',
	            	'width': '800px',
	            	'height': '600px',
	            	'margin': 'auto',
	            	'background-color' : 'white',
	            	'position' : 'relative'
	            });
			});
		});
	}
}(jQuery));