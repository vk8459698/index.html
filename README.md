<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Weather App</h1>
        <input type="text" id="cityInput" placeholder="Enter city name">
        <button onclick="getWeather()">Get Weather</button>
        <div id="weatherData"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>
