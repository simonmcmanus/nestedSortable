(function($) {
    $.fn.smmNestedSortable = function() {
        var defaults = {
            placeholderClass: "placeholder"
        };
        var options = $.extend(defaults, options);
        $.fn.smmNestedSortable.apply(this);
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
 	$.fn.smmNestedSortable.apply = function(sortable) {
    $(sortable).sortable({
        items: "li",
        helper: "helper",
        placeholder: 'placeholder',
        revert: true,
        forceHelperSize: true,
        sort: function(event, ui) {
            if ($(ui.placeholder).children().length <= 0) {
                $(ui.placeholder).append("<div class='sortable'>" + $(ui.helper).html() + "</div>");
                //					$(ui.placeholder).append($(ui.item)); // should work but does not - probably becuse the ui.item is being dragged?!?
            }
        },
        stop: function(event, ui) {
            $.fn.smmNestedSortable.change(event, ui);
        }
    });
};
})(jQuery);