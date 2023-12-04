document.addEventListener('DOMContentLoaded', function () {
    // Replace 'YOUR_API_KEY' with an actual API key
    const apiKey = '29f386de7cfc088dfc2373713d944ecd';
    const city = 'Cozumel';  // Replace with your city

    const humidityElement = document.getElementById('humidity');

    // Fetch humidity data from OpenWeatherMap API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.main && data.main.humidity) {
                const humidity = data.main.humidity;
                humidityElement.textContent = `Humidity: ${humidity}%`;
            } else {
                humidityElement.textContent = 'Unable to fetch humidity data';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            humidityElement.textContent = 'Error fetching humidity data';
        });
});