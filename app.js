//API KEY: 9a5b0e45e2527d15912fc63416ece6eb

const iconElement=document.querySelector(".weather-icon")
const locationIcon=document.querySelector(".location-icon")
const tempElement=document.querySelector(".temperature p")
const descElement=document.querySelector(".temperature-desc p")
const locationElement=document.querySelector(".location p")
const notificationElement=document.querySelector(".notification")
const advancedStats=document.querySelector(".adv-container p")
const backgroundChange=document.querySelector("body")
const popularCitiesTemp=document.querySelector("pop-container p")

var input=document.getElementById("search")
let city=""
let latitude=0.0
let longitude=0.0

input.addEventListener("keyup", function(event) {
    if(event.key === 'Enter') {
        event.preventDefault();

        city=input.value
        getSearchWeather(city)
        console.log(city)
    }
})
const weather={}

weather.temperature={
    unit: "farenheit"
}

const KELVIN=273

const key='9a5b0e45e2527d15912fc63416ece6eb'

if("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition, showError)
} else {
    notificationElement.style.display='block'
    notificationElement.innerHTML="<p> Sorry, your browser doesn't support geolocation </p>"
}

function setPosition(position) {
    latitude=position.coords.latitude
    longitude=position.coords.longitude
    getWeather(latitude, longitude)
}
locationIcon.addEventListener("click", function(event){
    console.log("Clicked")
    getWeather(latitude, longitude)
})

function showError(error) {
    notificationElement.style.display="block"
    notificationElement.innerHTML="<p> Couldn't get location. </p>"
}
function getSearchWeather(city) {
    let api='https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial'+'&appid='+key
    fetch(api)
    .then(function (response){
        let data=response.json()
        return data
    })
    .then(function(data){
        weather.temperature.value=(parseInt(data.main.temp))
        weather.description=data.weather[0].description
        weather.iconId=data.weather[0].icon
        weather.city=data.name
        weather.country=data.sys.country
        minimumTemp=(parseInt(data.main.temp_min))
        maximumTemp=(parseInt(data.main.temp_max))
        pressure=(parseInt(data.main.pressure))
        humidity=(parseInt(data.main.humidity))
        windSpeed=(parseInt(data.wind.speed))
        gustSpeed=(parseInt(data.wind.gust))
        visibility=(parseInt(data.visibility))
        numClouds=(parseInt(data.clouds.all))
        tempFeelsLike=(parseInt(data.main.feels_like))
    })
    .then(function(){
        displayWeather()
    })
}
function getWeather(lat, long) {
    longitude = long
    latitude = lat
    let api='https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&units=imperial'+'&lon='+longitude+'&appid='+key

    fetch(api)
    .then(function (response){
        let data=response.json()
        return data
    })
    .then(function(data){
        weather.temperature.value=(parseInt(data.main.temp))
        weather.description=data.weather[0].description
        weather.iconId=data.weather[0].icon
        weather.city=data.name
        weather.country=data.sys.country
        minimumTemp=(parseInt(data.main.temp_min))
        maximumTemp=(parseInt(data.main.temp_max))
        pressure=(parseInt(data.main.pressure))
        humidity=(parseInt(data.main.humidity))
        windSpeed=(parseInt(data.wind.speed))
        gustSpeed=(parseInt(data.wind.gust))
        visibility=(parseInt(data.visibility))
        numClouds=(parseInt(data.clouds.all))
        tempFeelsLike=(parseInt(data.main.feels_like))
    })
    .then(function(){
        displayWeather()
    })
}



function displayWeather() {
    iconElement.innerHTML="<img src=https://openweathermap.org/img/wn/"+weather.iconId+"@2x.png>"
    tempElement.innerHTML=weather.temperature.value + '°<span>F<span>'
    descElement.innerHTML=weather.description
    locationElement.innerHTML= weather.city + ', ' + weather.country
    
    advancedStats.innerHTML="Feels like: "+tempFeelsLike+"°F"+'\n'+"Minimum Temperature: "+minimumTemp+'°F'+'\n'+"Maximum Temperature: "+maximumTemp+'°F'+'\n'+"Pressure: "+pressure+'\n'+
                            "Humidity: "+humidity+'%'+'\n'+"Wind Speed: "+windSpeed+"mph"+'\n'+"Gust Speed: "+gustSpeed+"mph"+'\n'+"Visbility: "+visibility+"m"
                            +'\n'+"Number of Clouds: "+numClouds;
    

    function changeBGImage(){
        if(weather.iconId <= 232 && weather.iconId >= 200 ) {
            document.getElementsByTagName('body')[0] = "pictures/weather-bg/thunderstorm.jpg"
        }
        else if(weather.iconId <= 321 && weather.iconId >= 300 ) {
            document.getElementsByTagName('body')[0] = "pictures/weather-bg/drizzle.jpg"
        }
        else if(weather.iconId <= 531 && weather.iconId >= 500 ) {
            document.getElementsByTagName('body')[0] = "pictures/weather-bg/rain.jpg"
        }
        else if(weather.iconId <= 622 && weather.iconId >= 600 ) {
            document.getElementsByTagName('body')[0] = "pictures/weather-bg/snow.jpg"
        }
        else if(weather.iconId <= 781 && weather.iconId >= 701 ) {
            document.getElementsByTagName('body')[0] = "pictures/weather-bg/lowvis.jpg"
        }
        else if(weather.iconId === 800 ) {
            document.getElementsByTagName('body')[0] = "pictures/weather-bg/clear.jpg"
        }
        else if(weather.iconId <= 804 && weather.iconId >= 801 ) {
            document.getElementsByTagName('body')[0] = "pictures/weather-bg/clouds.jpg"
        }
    }
    changeBGImage();
   
}




//FOR CHOOSING WEATHER BACKGROUND
/* 
if(weather.iconId <= 232 && weather.iconId >= 200 ) {
            var backgroundWeather = "pictures/weather-bg/thunderstorm.jpg"
        }
        else if(weather.iconId <= 321 && weather.iconId >= 300 ) {
            var backgroundWeather = "drizzle"
        }
        else if(weather.iconId <= 531 && weather.iconId >= 500 ) {
            var backgroundWeather = "rain"
        }
        else if(weather.iconId <= 622 && weather.iconId >= 600 ) {
            var backgroundWeather = "snow"
        }
        else if(weather.iconId <= 781 && weather.iconId >= 701 ) {
            var backgroundWeather = "low-visibility"
        }
        else if(weather.iconId === 800 ) {
            var backgroundWeather = "clear"
        }
        else if(weather.iconId <= 804 && weather.iconId >= 801 ) {
            var backgroundWeather = "clouds"
        }
*/

//FOR CHANGIN WEATHER BACKGROUND
// backgroundChange.innerHTML="<img src="+weather+">"