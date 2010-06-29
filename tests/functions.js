var buildList = function(place, items) {
	var ul = $("<ul class='sortable'></ul>").appendTo(place);
	for(c=0;c < items; c++){
		$(ul).append("<li id='"+c+"'>item "+c+"</li>");
	}
	return ul;
};


// calculates number of pixels to drag the item. Params is the number of items it should be moved.
calcYShift = function(y) {
	return y * 20; // should take account of tollerance param.
}

calcXShift = function(x) {
	return 20 * x;
}



countJsonItems = function(json) {
	var count = 1;
	var	_countJsonItems = function(json, count){
		$(json).each(function() {
			count++;
			_countJsonItems(this.children);
		});
		return count;
	};
	return _countJsonItems(json, count);		
}

randomNumber = function(max) {
	return rand = Math.floor(Math.random() * max);
}