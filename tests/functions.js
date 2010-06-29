var buildList = function(place, items) {
	var ul = $("<ul class='sortable'></ul>").appendTo(place);
	for(c=0;c < items; c++){
		$(ul).append("<li id='"+c+"'>item "+c+"</li>");
	}
	return ul;
};