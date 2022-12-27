
	//standard sliders

	$('#size').on('input', function(){

		let sizeValue = parseInt($(this).val()); //get slider input value
		console.log(sizeValue);
		$('#tester').css('font-size', sizeValue+'px');

	});

	$('#size-2').on('input', function(){

		let sizeValue = parseInt($(this).val()); //get slider input value
		console.log(sizeValue);
		$('#tester-2').css('font-size', sizeValue+'px');

	});

	$('#size-3').on('input', function(){

		let sizeValue = parseInt($(this).val()); //get slider input value
		console.log(sizeValue);
		$('#tester-3').css('font-size', sizeValue+'px');

	});

	$('#size-4').on('input', function(){

		let sizeValue = parseInt($(this).val()); //get slider input value
		console.log(sizeValue);
		$('#tester-4').css('font-size', sizeValue+'px');

	});




//for tabs to cycle through type-tester

function setupTabs () {
	document.querySelectorAll(".resolve-button").forEach(button => {
		button.addEventListener("click", () => {
			const sideBar = button.parentElement; 
			const tabsContainer = sideBar.parentElement;
			const tabNumber = button.dataset.forTab; 
			const tabToActivate = tabsContainer.querySelector(`.resolve-content[data-tab="${tabNumber}"]`);
		
		
			sideBar.querySelectorAll(".resolve-button").forEach(button => {
				button.classList.remove("tabs-button--active");
			});

			tabsContainer.querySelectorAll(".resolve-content").forEach(tab => {
				tab.classList.remove("tabs-content--active");
			});

			button.classList.add("tabs-button--active");
			tabToActivate.classList.add("tabs-content--active");
		})
	})

	document.querySelectorAll(".monobloc-button").forEach(button => {
		button.addEventListener("click", () => {
			const sideBar = button.parentElement; 
			const tabsContainer = sideBar.parentElement;
			const tabNumber = button.dataset.forTab; 
			const tabToActivate = tabsContainer.querySelector(`.monobloc-content[data-tab="${tabNumber}"]`);
		
		
			sideBar.querySelectorAll(".monobloc-button").forEach(button => {
				button.classList.remove("tabs-button--active");
			});

			tabsContainer.querySelectorAll(".monobloc-content").forEach(tab => {
				tab.classList.remove("tabs-content--active");
			});

			button.classList.add("tabs-button--active");
			tabToActivate.classList.add("tabs-content--active");
		})
	})

	document.querySelectorAll(".pogi-button").forEach(button => {
		button.addEventListener("click", () => {
			const sideBar = button.parentElement; 
			const tabsContainer = sideBar.parentElement;
			const tabNumber = button.dataset.forTab; 
			const tabToActivate = tabsContainer.querySelector(`.pogi-content[data-tab="${tabNumber}"]`);
		
		
			sideBar.querySelectorAll(".pogi-button").forEach(button => {
				button.classList.remove("tabs-button--active");
			});

			tabsContainer.querySelectorAll(".pogi-content").forEach(tab => {
				tab.classList.remove("tabs-content--active");
			});

			button.classList.add("tabs-button--active");
			tabToActivate.classList.add("tabs-content--active");
		})
	})

	document.querySelectorAll(".trickle-button").forEach(button => {
		button.addEventListener("click", () => {
			const sideBar = button.parentElement; 
			const tabsContainer = sideBar.parentElement;
			const tabNumber = button.dataset.forTab; 
			const tabToActivate = tabsContainer.querySelector(`.trickle-content[data-tab="${tabNumber}"]`);
		
		
			sideBar.querySelectorAll(".trickle-button").forEach(button => {
				button.classList.remove("tabs-button--active");
			});

			tabsContainer.querySelectorAll(".trickle-content").forEach(tab => {
				tab.classList.remove("tabs-content--active");
			});

			button.classList.add("tabs-button--active");
			tabToActivate.classList.add("tabs-content--active");
		})
	})
}

document.addEventListener("DOMContentLoaded", () => {
	setupTabs();
});



//to change the styling of fonts on the entire website

const resolveButton = document.querySelector('.all-resolve')
const monoblocButton = document.querySelector('.all-monobloc')
const pogiButton = document.querySelector('.all-pogi')
const trickleButton = document.querySelector('.all-trickle')

$(document).ready(function() {
	$(".all-resolve").click(function () {
	  $("main").css("font-family", "Resolve");
	  $(".project-description").css("font-style", "italic");
	  $("h1").css("font-family", "Resolve");
	  $("h1").css("font-style", "normal");
	  $("h2").css("font-family", "Resolve");
	  $("h2").css("font-style", "normal");
	  $('span').css("font-family", "Resolve");
	  $("span").css("font-style", "normal");
	  $('button').css("font-family", "Resolve");
	  $('select').css("font-family", "Resolve");
	  monoblocButton.classList.remove('tabs-button--active');
	  resolveButton.classList.add('tabs-button--active');
	});

	$(".all-monobloc").click(function () {
		$("main").css("font-family", "Monobloc_Regular");
		$(".project-description").css("font-style", "normal");
		$("h1").css("font-family", "Monobloc_Regular");
		$("h2").css("font-family", "Monobloc Mono _Regular");
		$('span').css("font-family", "Monobloc Mono _Regular");
		$('button').css("font-family", "Monobloc Mono _Regular");
		$('select').css("font-family", "Monobloc Mono _Regular");
		resolveButton.classList.remove('tabs-button--active');
		monoblocButton.classList.add('tabs-button--active');
	  });


});

//style selection
const resolveContent = document.querySelector('#resolve-content')

$(document).ready(function () {
	$('#resolve-options').change(function () {
		var selectedOption = $('#resolve-options option:selected');
		resolveContent.classList.remove('resolve-book');
		resolveContent.classList.remove('resolve-italic');
		resolveContent.classList.remove('resolve-bold');
		resolveContent.classList.add(selectedOption.val());
	});
});


const monoblocContent = document.querySelector('#monobloc-content')

$(document).ready(function () {
	$('#monobloc-options').change(function () {
		var selectedOption = $('#monobloc-options option:selected');
		monoblocContent.classList.remove('monobloc-reg');
		monoblocContent.classList.remove('monobloc-light');
		monoblocContent.classList.remove('monobloc-bold');
		monoblocContent.classList.remove('monobloc-mono');
		monoblocContent.classList.add(selectedOption.val());
	});
});



//scrolling with click and drag

const projectId = function () {
	
	const slider = document.querySelector('#'+this.id);
	let isDown = false;
	let startX;
	let scrollLeft;

	slider.addEventListener('mousedown', (e) => {
		isDown = true;
		startX = e.pageX - slider.offsetLeft;
		scrollLeft = slider.scrollLeft;
	});

	slider.addEventListener('mouseleave', () => {
		isDown = false;
	});

	slider.addEventListener('mouseup', () => {
		isDown = false;
	});

	slider.addEventListener('mousemove', (e) => {
		if(!isDown) return;
		e.preventDefault();
		const x = e.pageX - slider.offsetLeft;
		const walk = x - startX;
		slider.scrollLeft = scrollLeft - walk;
	});
};
document.getElementById('construction-zone').onmouseover = projectId;
////document.getElementById('sundae-flowers').onmouseover = projectId;
document.getElementById('kilder').onmouseover = projectId;
document.getElementById('cj-type').onmouseover = projectId;
//document.getElementById('gretel-hanlyn').onmouseover = projectId;
document.getElementById('spring-speaker').onmouseover = projectId;
document.getElementById('flipbook').onmouseover = projectId;
document.getElementById('yearbook').onmouseover = projectId;
document.getElementById('poi').onmouseover = projectId;
document.getElementById('barangay').onmouseover = projectId;
document.getElementById('haunted').onmouseover = projectId;
document.getElementById('road-tripping').onmouseover = projectId;



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

