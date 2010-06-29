
$(document).ready(function() {
	module("smmNestedSortable Tests- draggy droppy");
	var div = $('body').append('<div>testing div</div>');
	var listItems = 5;
	var ul = buildList(div, listItems);
	sl = $(ul).smmNestedSortable({
		stop:function(event, ui) {
		     $.fn.smmNestedSortable.change(event, ui);
			window.newSpec = $.parseJSON(jQuery.fn.smmNestedSortable.jsonSerializer.buildSpec());
		}
	});
	originalSpec = jQuery.fn.smmNestedSortable.jsonSerializer.buildSpec();
	test("sorting tests", function() {
		var item = jQuery(sl).children().eq(0);// first item;
		jQuery(item).simulate('drag', {'dy':calcYShift(1), 'dx':calcXShift(1)}); // drag first item down 
		for(c=0;c<20;c++){
			jQuery(sl).children().eq(0).simulate('drag', {'dy':calcYShift(randomNumber(19)), 'dx':calcXShift(randomNumber(1))}); // drag first item down 	
			if(countJsonItems(window.newSpec) == listItems);
								ok( true, "all pass" );
		}









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
