document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
    const apiKey = '29f386de7cfc088dfc2373713d944ecd';
    const latitude = 20.4;
    const longitude = -86.93;

    // Fetch current weather
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(currentData => {
            displayCurrentWeather(currentData);
        })
        .catch(error => {
            console.error('Error fetching current weather data:', error);
        });

    // Fetch 4-day forecast
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

    fetch(forecastUrl)
        .then(response => response.json())
        .then(forecastData => {
            displayPredictedWeather(forecastData);
        })
        .catch(error => {
            console.error('Error fetching predicted weather data:', error);
        });
}

function displayCurrentWeather(data) {
    const currentWeatherContainer = document.getElementById('current-weather');
    currentWeatherContainer.innerHTML = ''; // Clear previous content

    const currentTemperatureElement = document.createElement('p');
    currentTemperatureElement.textContent = `Current Temperature: ${data.main.temp}°F`;

    const humidityElement = document.createElement('p');
    humidityElement.textContent = `Humidity: ${data.main.humidity}%`;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = `Description: ${data.weather[0].description}`;

    const iconElement = document.createElement('img');
    iconElement.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    iconElement.alt = 'Weather Icon';

    currentWeatherContainer.appendChild(currentTemperatureElement);
    currentWeatherContainer.appendChild(humidityElement);
    currentWeatherContainer.appendChild(descriptionElement);
    currentWeatherContainer.appendChild(iconElement);
}

function displayPredictedWeather(data) {
    const predictedWeatherContainer = document.getElementById('predicted-weather');
    predictedWeatherContainer.innerHTML = ''; // Clear previous content

    // predicted weather for the next 4 days
    for (let i = 1; i <= 4; i++) {
        const forecast = data.list[i * 8]; // Get data for every 8 hours (4 times for a 32-hour period)
        const date = new Date(forecast.dt * 1000); // Convert date

        const card = document.createElement('div');
        card.classList.add('weather-card');

        const dateElement = document.createElement('p');
        dateElement.textContent = date.toDateString();

        const temperatureElement = document.createElement('p');
        temperatureElement.textContent = `Temperature: ${forecast.main.temp}°F`;

        const humidityElement = document.createElement('p');
        humidityElement.textContent = `Humidity: ${forecast.main.humidity}%`;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = `Description: ${forecast.weather[0].description}`;

        card.appendChild(dateElement);
        card.appendChild(temperatureElement);
        card.appendChild(humidityElement);
        card.appendChild(descriptionElement);

        predictedWeatherContainer.appendChild(card);
    }
}