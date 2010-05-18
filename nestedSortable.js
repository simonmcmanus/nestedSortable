
(function($){  
	$.fn.uiNestedSortables = function() {  
		var defaults = {  
			placeholderClass: "placeholder" 
		};
		var options = $.extend(defaults, options);  
		$(this).sortable({
			items: "li",
			placeholder:'placeholder',
			sort: function(event, ui){
				$.fn.uiNestedSortables.change(event, ui);
			//	if($(ui.placeholder).children().length <= 0){
			///		$(ui.placeholder).append("<div class='"+defaults.placeholderClass+"'>...<\/div>");
				//}
			},
		   stop: function(event, ui) {
				$.fn.uiNestedSortables.change(event, ui);
			}
	});
	$.fn.uiNestedSortables.change= function(event, ui) {
				if(ui.position.left-19  >  ui.originalPosition.left){
					if(!$(ui.item).is("ul.sortable")){
							$(ui.item).wrapInner("<li><ul class='sortable'/><\/li>");
					}
				}else if(ui.position.left-19  <  ui.originalPosition.left){
					// kill child
					console.log("kill child", ui.item);
					if($(this).parent().is("li")){
						$(this).parent().replaceWith($(this).children());
					}
				}
	}
};
})(jQuery);  