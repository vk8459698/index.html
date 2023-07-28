function getWeather() {
    const apiKey = "bff28d83355c4bf2f6f9934d3d3a3ef1";
    const cityInput = document.getElementById("cityInput").value;

    if (!cityInput) {
        alert("Please enter a city name.");
        return;
    }

    const weatherDataDiv = document.getElementById("weatherData");
    weatherDataDiv.innerHTML = "<p>Loading...</p>";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const weatherDescription = data.weather[0].description;
            const temperature = (data.main.temp - 273.15).toFixed(2); 
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;
            const city = data.name;

            const weatherHTML = `
                <h2>${city}</h2>
                <p>Weather: ${weatherDescription}</p>
                <p>Temperature: ${temperature}°C</p>
                <p>Humidity: ${humidity}%</p>
                <p>Wind Speed: ${windSpeed} m/s</p>
            `;

            weatherDataDiv.innerHTML = weatherHTML;
        })
        .catch(error => {
            weatherDataDiv.innerHTML = "<p>Failed to fetch weather data. Please try again later.</p>";
        });
}
