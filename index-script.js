
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
}

document.addEventListener("DOMContentLoaded", () => {
	setupTabs();
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
document.getElementById('cj-type').onmouseover = projectId;
document.getElementById('kilder').onmouseover = projectId;
document.getElementById('flowerverse').onmouseover = projectId;
document.getElementById('spring-speaker').onmouseover = projectId;
document.getElementById('flipbook').onmouseover = projectId;
document.getElementById('yearbook').onmouseover = projectId;
document.getElementById('poi').onmouseover = projectId;
document.getElementById('barangay').onmouseover = projectId;
document.getElementById('road-tripping').onmouseover = projectId;





