//resizing
var graphicDesignArticle = "<article class='graphic-design right-column-content'>";
var typeDesignArticle = "<article class='type-design left-column-content'>";
var leftColumnSection = "<section class='left-column'>";
var rightColumnSection = "<section class='right-column'>";

function narrow() {
	$(".right-column-content").unwrap();
	$(".gd-content").unwrap();

	$(".left-column-content").unwrap();
	$(".td-content").unwrap();
};

function wide(){
	$(".gd-content").wrapAll(graphicDesignArticle);
	$(".right-column-content").wrapAll(rightColumnSection);

	$(".td-content").wrapAll(typeDesignArticle);
	$(".left-column-content").wrapAll(leftColumnSection);
};

var bounds = [
	{min:0, max:800, func:narrow},
	{min:801, func:wide}
];

var resizeFn = function(){
	var lastBoundry;
	return function(){
		var width = window.innerWidth;
		var boundry, min, max;
		for(var i=0; i<bounds.length; i++){
			boundry = bounds[i];
			min = boundry.min || Number.MIN_VALUE;
            max = boundry.max || Number.MAX_VALUE;
            if(width > min && width < max 
               && lastBoundry !== boundry){
                lastBoundry = boundry;
                return boundry.func.call(boundry);  
			   } 
		}
	}
};
$(window).resize(resizeFn());
$(document).ready(function(){
    $(window).trigger('resize');
});