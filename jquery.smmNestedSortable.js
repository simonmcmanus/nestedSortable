(function($) {
  $.fn.smmNestedSortable = function(settings) {
    this.each(function() {
 		$(this).sortable({
			items: "li",
			helper: "helper",
			connectWith: '.sortable',
			placeholder: 'placeholder',
			sort: function(event, ui) {
				$(ui.placeholder).empty();
				if (ui.position.left - 10 > ui.originalPosition.left) 	// make child 
					$(ui.placeholder).append("<ul class='sortable'>"+$(ui.item).html()+"</ul>");
			},
			stop: function(event, ui) {
				$.fn.smmNestedSortable.change(event, ui);
				if($.fn.smmNestedSortable.buildSpec != undefined)
					$.fn.smmNestedSortable.buildSpec();
			}, 
		});
    });
    return this;
  };
  	$.fn.smmNestedSortable.change = function(event, ui) {


		if (ui.position.left - 10 > ui.originalPosition.left) { 	// make child - could add some more check in here. 
			if($(ui.item).prev().is('li')){
				$(ui.item).prev().append(ui.item);
				$(ui.item).wrap("<ul class='sortable'></ul>");
			}
       } else if (ui.position.left - 10 < ui.originalPosition.left) {  // kill child
          if ($(ui.item).parent().is("ul")) {		// confirm its not the base level element	
				if($(ui.item).parent().children().length <= 1){ // if only item in the list
					$(ui.item).parent().replaceWith($(ui.item));// put outside not inside parent li
				}
           }
       }		
	$('.sortable').sortable( "refresh" );
   }
})(jQuery);