

const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('lastModified').textContent = new Date().toLocaleDateString('en-US', options);

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const nav = document.querySelector("nav");
const footer = document.querySelector("footer");
const lastModified = document.querySelector("#lastModified");
const p = document.querySelector("p");
const paragraph = document.querySelector("#paragraph li");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌑")) {
		main.style.background = "#000";
		main.style.color = "white";
		nav.style.background = "purple";
		nav.style.color = "gold";
		footer.style.background = "purple";
		footer.style.color = "gold";
		lastModified.style.color = "white";
		p.style.color = "white";
		paragraph.style.color = "white";
		navigation.style.background = "black";
		
		modeButton.textContent = "☀️";
		
	} else {
		main.style.background = "#a21d56";
		main.style.color = "black";
		nav.style.background = "gold";
		nav.style.color = "purple";
		footer.style.background = "gold";
		footer.style.color = "purple";
		lastModified.style.color = "black";
		p.style.color = "black";
		paragraph.style.color = "black";
		navigation.style.background = "purple";
		
		modeButton.textContent = "🌑";
	}
});