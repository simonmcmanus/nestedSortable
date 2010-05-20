(function($) {

  $.fn.smmNestedSortable = function(settings) {
    this.each(function() {
 		$(this).sortable({
			items: "li",
			helper: "helper",
			placeholder: 'placeholder',
			revert: true,
			forceHelperSize: true,
			sort: function(event, ui) {
		//		if ($(ui.placeholder).children().length <= 0) {
		//			$(ui.placeholder).append("<div class='sortable'>" + $(ui.helper).html() + "</div>");
		//			// $(ui.placeholder).append($(ui.item)); // should work but does not - probably becuse the ui.item is busy being dragged?!?
		//		}
			},
			stop: function(event, ui) {
				$.fn.smmNestedSortable.change(event, ui);
				$('.sortable').sortable( "refresh" );
			}
		});
    });
    return this;
  };

  $.fn.smmNestedSortable.change = function(event, ui) {
//	console.log(ui, ui.position.top, ui.originalPosition.top)
//		var itemHeight = ui.item.height();
	  if (ui.position.left - 19 > ui.originalPosition.left) {
			// make child
           $(ui.item).wrapAll("<ul class='sortable'></ul>");
       } else if (ui.position.left - 19 < ui.originalPosition.left) {
           // kill child
		// confirm its not the base level element	
			
           if ($(ui.item).parent().is("ul")) {
			// if only item in the list
			if($(ui.item).parent().children().length > 1){ // more than one item in the list
				console.log('here');
				 $(ui.item).insertBefore("</ul>");
			}else{
				$(ui.item).parent().replaceWith($(ui.item));
			}
           }
       }
	$('.sortable').sortable( "refresh" );
   }

})(jQuery);


/*
$('.sortable').sortable( "refresh" );

(function($) {
    $.fn.smmNestedSortable = function() {
	
        $.fn.smmNestedSortable.makeSortable();
    };
    $.fn.smmNestedSortable.change = function(event, ui) {
        if (ui.position.left - 19 > ui.originalPosition.left) {
            console.log('cl', $(ui.item));
            //					$(ui.item).wrap("<li><ul class='droppable'/></li>");
            $(ui.item).wrapAll("<li><ul class='sortable'></ul></li>");
            //					console.log($(ui.item).wrapInner("<li></li>"));
            //					if(!$(ui.item).is("ul.sortable")){
            //						$(ui.item).wrap("<li><ul class='droppable'/></li>");
            //					}
        } else if (ui.position.left - 19 < ui.originalPosition.left) {
            // kill child
            if ($(ui.item).parent().parent().is("li")) {
                $(ui.item).parent().parent().replaceWith($(ui.item));
            }
        }
    }
  
})(jQuery);

*/