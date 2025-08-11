const apiKey = "40702e8129204d55fe3e9a8b6f0448f1";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInpu");
const cityName = document.getElementById("cityName");
const description = document.getElementById("description");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windspeed");
const weatherIcon = document.getElementById("weatherIcon");
const darkModeToggle = document.getElementById("darkModeToggle");

async function getWeather(city){
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error("City not found");
        }
        const data = await response.json();

        cityName.textContent = `${data.name}, ${data.sys.contry}`;
        description.textContent = data.weather[0].description;
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        humidity.textContent = `${data.main.humidity}%`;
        windSpeed.textContent = `${data.wind.speed} m/s`;
        weatherIcon.scr = `https://openweather.org/img/wn/${data/weather[0].icon}@2x.png`;
    }
    catch (error) {
        alert(error);
    }
}
searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if(city){
        getWeather(city);
    }
});
cityInput.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        searchBtn.click();
    }
});
darkModeToggle.addEventListener("click", ()=> {
    document.body.classList.toggle("dark-mode");
});