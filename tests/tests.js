
// calculates number of pixels to drag the item. Params is the number of items it should be moved.
calcYShift = function(y) {
	return y * 20; // should take account of tollerance param.
}

calcXShift = function(x) {
	return 20 * x;
}



countJsonItems = function(json) {
	var count = 1;
	var	_countJsonItems = function(json, count){
		$(json).each(function() {
			count++;
			_countJsonItems(this.children);
		});
		return count;
	};
	return _countJsonItems(json, count);		
}

$(document).ready(function() {
	module("smmNestedSortable Tests- draggy droppy");
	var div = $('body').append('<div>testing div</div>');
	var ul = buildList(div, 5);
	sl = $(ul).smmNestedSortable({
		stop:function(event, ui) {
		     $.fn.smmNestedSortable.change(event, ui);
			window.newSpec = $.parseJSON(jQuery.fn.smmNestedSortable.jsonSerializer.buildSpec());
			countJsonItems(window.newSpec);
	//		console.log(window.newSpec);
		}
	});
	originalSpec = jQuery.fn.smmNestedSortable.jsonSerializer.buildSpec();
	test("sorting tests", function() {

		var item = jQuery(sl).children().eq(0);
		jQuery(item).simulate('drag', {'dy':calcYShift(1), 'dx':calcXShift(1)}); // drag first item down 
//		jQuery(item).simulate('drag', {'dy':calcYShift(-1), 'dx':calcXShift(-1)}); // drag first item down 
	var newSpec = jQuery.fn.smmNestedSortable.jsonSerializer.buildSpec();
	if(originalSpec == newSpec);
		ok( true, "spec was changed after the drag operation.");
	});
	test("change the spec", function() {
//		jQuery(ul).children().eq(0).simulate('drag', {'dy':80, 'dx':0});
		console.log(ul);
	 	var newSpec = jQuery.fn.smmNestedSortable.jsonSerializer.buildSpec();
		if(newSpec != originalSpec)
			ok( true, "all pass" );
	});
});
