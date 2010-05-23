$.fn.smmNestedSortable.buildSpec = function() {
	var spec = [];
	jQuery("ul.sortable:first").children().each(function() {
		spec.push($.fn.smmNestedSortable._buildSpec($(this)));
	});
	console.log($.toJSON(spec));
};

$.fn.smmNestedSortable._buildSpec = function (liList) {
	var spec = [];
	liList.each(function() {
			var node = {
				title: this.id
			};
			node.children = $.fn.smmNestedSortable._buildSpec(jQuery(this).children("ul").children("li"));
			spec.push(node);
 	});
  return spec;
};




