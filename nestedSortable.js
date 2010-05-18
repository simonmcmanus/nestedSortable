
(function($){  
	$.fn.smmNestedSortable = function() {  
		var defaults = {  
			placeholderClass: "placeholder" 
		};
		var options = $.extend(defaults, options);  
		$(this).sortable({
			items: "li",
			helper: "helper",
			placeholder:'placeholder',
			revert: true,
			forceHelperSize: true,
			sort: function(event, ui){
				// ui.helper - item being dragged
 				if($(ui.placeholder).children().length <= 0){
			//				console.log("ui", ui, event, this);
						//	var frag  = document.createDocumentFragment();
						//	$(frag).append(ui.helper);
					
					$(ui.placeholder).append("<div class='"+defaults.placeholderClass+"'>"+$(ui.helper).html()+"</div>");
//					$(ui.placeholder).append($(ui.item));
//					console.log("ui", ui.helper);
//					console.log(frag);
				}
			},
		   stop: function(event, ui) {
				$.fn.smmNestedSortable.change(event, ui);
			}
	});
	$.fn.smmNestedSortable.change= function(event, ui) {
				if(ui.position.left-19  >  ui.originalPosition.left){
					
					console.log($(ui.placeholder).parent());
//					if(!$(ui.item).is("ul.sortable")){
						$(ui.item).wrap("<li><ul class='droppable'/></li>");
//					}
				}else if(ui.position.left-19  <  ui.originalPosition.left){
					// kill child
					if($(ui.item).parent().parent().is("li")){
						$(ui.item).parent().parent().replaceWith($(ui.item));
					}
				}
	}
};
})(jQuery);  