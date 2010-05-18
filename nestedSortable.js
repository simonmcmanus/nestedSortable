(function($) {
  var defaults = { option: true };
  var options = {};

  $.fn.smmNestedSortable = function() {
	$.fn.smmNestedSortable.makeSortable();
    return options;
  };


  $.fn.smmNestedSortable.makeSortable = function() {
      $('.sortable').sortable({
          items: "li",
          helper: "helper",
          placeholder: 'placeholder',
          revert: true,
          forceHelperSize: true,
          sort: function(event, ui) {
              if ($(ui.placeholder).children().length <= 0) {
                  $(ui.placeholder).append("<div class='sortable'>" + $(ui.helper).html() + "</div>");
                  //	$(ui.placeholder).append($(ui.item)); // should work but does not - probably becuse the ui.item is being dragged?!?
              }
          },
          stop: function(event, ui) {
              $.fn.smmNestedSortable.change(event, ui);
              $.fn.smmNestedSortable.makeSortable();
              $('.sortable').smmNestedSortable();
          }
      });
  };


/*  function setOptions(new_options) {
    options = $.extend({}, defaults, options, new_options);
  }
*/
})(jQuery);

/*
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
    $.fn.smmNestedSortable.makeSortable = function() {
        $('.sortable').sortable({
            items: "li",
            helper: "helper",
            placeholder: 'placeholder',
            revert: true,
            forceHelperSize: true,
            sort: function(event, ui) {
                if ($(ui.placeholder).children().length <= 0) {
                    $(ui.placeholder).append("<div class='sortable'>" + $(ui.helper).html() + "</div>");
                    //	$(ui.placeholder).append($(ui.item)); // should work but does not - probably becuse the ui.item is being dragged?!?
                }
            },
            stop: function(event, ui) {
                $.fn.smmNestedSortable.change(event, ui);
                $.fn.smmNestedSortable.makeSortable();
                $('.sortable').smmNestedSortable();
            }
        });
    };
})(jQuery);

*/