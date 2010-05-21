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
			}, 
		});
    });
    return this;
  };
  	$.fn.smmNestedSortable.change = function(event, ui) {
		if (ui.position.left - 10 > ui.originalPosition.left) { 	// make child - could/should add some more check in here. 
			if($(ui.placeholder).parent().children().length <= 1)
				$(ui.item).wrapAll("<li><ul class='sortable'></ul></li>");
       } else if (ui.position.left - 10 < ui.originalPosition.left) {  // kill child
          if ($(ui.item).parent().parent().is("ul")) {		// confirm its not the base level element	
				if($(ui.item).parent().parent().children().length <= 1){ // if only item in the list
					$(ui.item).parent().parent().replaceWith($(ui.item));
				}
           }
       }
	// cleanup unused lists
	$('ul.sortable').each(function() {
		if($(this).children().length < 1 || $(this).children().text() == "") // if only item and item is empty.
			$(this).parent().remove();	// remove the parent li
	});
		
	$('.sortable').sortable( "refresh" );
   }
})(jQuery);