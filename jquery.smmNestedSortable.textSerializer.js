/*
SmmNestedSortables Text Serializer

Calling $.fn.smmNestedSortable.textSerializer.buildSpec() will return a serialized string of the first ul.sortable on the page.

smmNestedSortables can automatically calls buildSpec when the spec is changed. This is how you would do it: 

$('.sortable').smmNestedSortable({
	'serializer':function() {
		var spec = $.fn.smmNestedSortable.textSerializer.buildSpec();
		$("#spec").html("<b>text output</b><br /><br />"+ spec);
	}
});

*/
(function($) {
	$.fn.smmNestedSortable.textSerializer = {
		newLine:"<br />",
		indent:"*", 
		buildSpec: function() {
			var spec = [];
			var level = 0;
			jQuery("ul.sortable:first").children().each(function() {
				spec.push($.fn.smmNestedSortable.textSerializer._buildSpec($(this), level));
			});
			return spec.join('');			
		}, 
		_buildSpec: function(liList, level) {
			var spec = [];
			level++;
			liList.each(function() {		
				spec.push($.fn.smmNestedSortable.textSerializer.stars(level)+" "+this.id+$.fn.smmNestedSortable.textSerializer.newLine);
				spec.push($.fn.smmNestedSortable.textSerializer._buildSpec(jQuery(this).children("ul").children("li"), level));
		 	});
		  return spec.join('');
		}, 
		stars: function(number) {
			var stars = [];
			for (c=0;c<number;c++){
				stars.push($.fn.smmNestedSortable.textSerializer.indent);
			}
			return stars.join('');
		}
	};
})(jQuery);
