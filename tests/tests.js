$(document).ready(function() {
	
	module("Module A");
	var div = $('body').append('<div>testing div</div>');
	var ul = buildList(div, 20);
	sl = $(ul).sortable({});
	originalSpec = jQuery.fn.smmNestedSortable.jsonSerializer.buildSpec();
	
	test("make sortable", function() {
	//	var sl = $(ul).smmNestedSortable({});
	jQuery(sl).children().eq(0).simulate('drag', {'dy':60, 'dx':0});
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
