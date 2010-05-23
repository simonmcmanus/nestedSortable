$.fn.smmNestedSortable.buildSpec = function() {
	var spec = [];
	var level = 0;
	jQuery("ul.sortable:first").children().each(function() {
		spec.push($.fn.smmNestedSortable._buildSpec($(this), level));
	});
	console.log(spec.join(''));
};

$.fn.smmNestedSortable._buildSpec = function (liList, level) {
	var spec = [];
	level++;
	liList.each(function() {		
		spec.push($.fn.smmNestedSortable.stars(level)+" "+this.id+"\n");
		spec.push($.fn.smmNestedSortable._buildSpec(jQuery(this).children("ul").children("li"), level));
 	});
  return spec.join('');
};

// return a string of stars - passing 3 return ***
$.fn.smmNestedSortable.stars = function(number) {
	var stars = [];
	for (c=0;c<number;c++){
		stars.push("*");
	}
	return stars.join('');
	
};