const weatherAlert = {
    location: 'Cozumel, Mexico',
    message: 'There are no weather alerts to display.',
};

function displayWeatherAlert() {
    const alertMessage = document.getElementById('alert-message');
    const weatherAlertElement = document.getElementById('weather-alert');

    alertMessage.textContent = `${weatherAlert.location} - ${weatherAlert.message}`;
    weatherAlertElement.style.display = 'block';
}


function closeWeatherAlert() {
    const weatherAlertElement = document.getElementById('weather-alert');
    weatherAlertElement.style.display = 'none';
}


document.addEventListener('DOMContentLoaded', displayWeatherAlert);