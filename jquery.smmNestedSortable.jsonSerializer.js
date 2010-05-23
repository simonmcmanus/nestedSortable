/*
SmmNestedSortables JSON Serializer

Calling $.fn.smmNestedSortable.jsonSerializer.buildSpec() will return a serialized string of the first ul.sortable on the page.

smmNestedSortables can automatically calls buildSpec when the spec is changed. This is how you would do it: 

$('.sortable').smmNestedSortable({
	'serializer':function() {
		var spec = $.fn.smmNestedSortable.jsonSerializer.buildSpec();
		$("#spec").html("<b>text output</b><br /><br />"+ spec);
	}
});

*/
$.fn.smmNestedSortable.jsonSerializer = {
	'buildSpec': function() {
		var spec = [];
		jQuery("ul.sortable:first").children().each(function() {
			spec.push($.fn.smmNestedSortable.jsonSerializer._buildSpec($(this)));
		});
		return $.toJSON(spec);
	},
	'_buildSpec': function(liList) {
		var spec = [];
		liList.each(function() {
			if(this.id != 'empty') {
				var li=this;
				var node = {
					title: li.id
				};
				node.children = $.fn.smmNestedSortable.jsonSerializer._buildSpec(jQuery(li).children("ul").children("li"));
				spec.push(node);
			}
	 	});
	  return spec;
	}
};
