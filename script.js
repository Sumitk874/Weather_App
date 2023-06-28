const apiKey = "e754dcf783d2e5037302b7dc6f4d5927";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();
    
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "° C";            
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/hr";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/svg/svg/clouds.svg";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/svg/clear.svg";
        }
        else if(data.weather[0].main == "rain"){
            weatherIcon.src = "images/svg/rain.svg";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/svg/drizzle.svg";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/svg/mist.svg";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";


    }
}


searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keyup", function(event) {
    // Check if the Enter key was pressed
    if (event.keyCode === 13) {
      checkWeather(searchBox.value);
    }
  });
  