

const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('lastModified').textContent = new Date().toLocaleDateString('en-US', options);

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');

});