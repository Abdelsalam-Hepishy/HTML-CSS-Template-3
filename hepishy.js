let progressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");

window.onscroll = function () {
	if (window.scrollY >= section.offsetTop - 100) {
		console.log("Reached Section Three");
		progressSpans.forEach((span) => {
			span.style.width = span.dataset.width;
		})
	}
};

let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false; // Function Started ? No

window.onscroll = function () {
	if (window.scrollY >= statsSection.offsetTop) {
		if (!started) {
			nums.forEach((num) => startCount(num));
		}
		started = true;
	}
};

function startCount(el) {
	let goal = el.dataset.goal;
	let count = setInterval(() => {
		el.textContent++;
		if (el.textContent == goal) {
			clearInterval(count);
		}
	}, 2000 / goal);
};