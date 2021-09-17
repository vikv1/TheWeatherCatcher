//API KEY: 9a5b0e45e2527d15912fc63416ece6eb

const iconElement=document.querySelector(".weather-icon")
const locationIcon=document.querySelector(".location-icon")
const tempElement=document.querySelector(".temperature p")
const descElement=document.querySelector(".temperature-desc p")
const locationElement=document.querySelector(".location p")
const notificationElement=document.querySelector(".notification")
const advancedStats=document.querySelector(".adv-container p")
const backgroundChange=document.querySelector("body")
const popularCitiesTemp=document.querySelector(".pop-container p")

seattleTemp = ''
londonTemp = ''
tokyoTemp = ''
moscowTemp = ''
parisTemp = ''
newyorkTemp = ''
romeTemp = ''
delhiTemp = ''
hkTemp = ''
dubaiTemp = ''


var input=document.getElementById("search")
let city=""
let latitude=0.0
let longitude=0.0

input.addEventListener("keyup", function(event) {
    if(event.key === 'Enter') {
        event.preventDefault();

        city=input.value
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
    let seattle='http://api.openweathermap.org/data/2.5/weather?q=seattle&units=imperial&appid='+key
    let tokyo='http://api.openweathermap.org/data/2.5/weather?q=tokyo&units=imperial&appid='+key
    let london='http://api.openweathermap.org/data/2.5/weather?q=london&units=imperial&appid='+key
    let moscow='http://api.openweathermap.org/data/2.5/weather?q=moscow&units=imperial&appid='+key
    let paris='http://api.openweathermap.org/data/2.5/weather?q=paris&units=imperial&appid='+key
    let newyork = 'http://api.openweathermap.org/data/2.5/weather?q=new%20york&units=imperial&appid='+key
    let rome = 'http://api.openweathermap.org/data/2.5/weather?q=rome&units=imperial&appid='+key
    let delhi = 'http://api.openweathermap.org/data/2.5/weather?q=delhi&units=imperial&appid='+key
    let hongkong = 'http://api.openweathermap.org/data/2.5/weather?q=hong%20kong&units=imperial&appid='+key
    let dubai = 'http://api.openweathermap.org/data/2.5/weather?q=dubai&units=imperial&appid='+key
    let api='http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial'+'&appid='+key

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
    fetch(seattle)
    .then(function (response){
        let seattleData=response.json()
        return seattleData
    })
    .then(function(seattleData){
        seattleTemp=(parseInt(seattleData.main.temp))
    })
    fetch(tokyo)
    .then(function (response){
        let tokyoData=response.json()
        return tokyoData
    })
    .then(function(tokyoData){
        tokyoTemp=(parseInt(tokyoData.main.temp))
    })
    fetch(london)
    .then(function (response){
        let londonData=response.json()
        return londonData
    })
    .then(function(londonData){
        londonTemp=(parseInt(londonData.main.temp))
    })
    fetch(moscow)
    .then(function (response){
        let moscowData=response.json()
        return moscowData
    })
    .then(function(moscowData){
        moscowTemp=(parseInt(moscowData.main.temp))
    })
    fetch(paris)
    .then(function(response){
        let parisData=response.json()
        return parisData
    })
    .then(function(parisData){
        parisTemp=(parseInt(parisData.main.temp))
    })
    fetch(newyork)
    .then(function(response){
        let nyData=response.json()
        return nyData
    })
    .then(function(nyData){
        newyorkTemp=(parseInt(nyData.main.temp))
    })
    fetch(rome)
    .then(function(response){
        let romeData=response.json()
        return romeData
    })
    .then(function(romeData){
        newyorkTemp=(parseInt(romeData.main.temp))
    })
    fetch(delhi)
    .then(function(response){
        let delhiData=response.json()
        return delhiData
    })
    .then(function(delhiData){
        delhiTemp=(parseInt(delhiData.main.temp))
    })
    fetch(hongkong)
    .then(function(response){
        let hkData=response.json()
        return hkData
    })
    .then(function(hkData){
        hkTemp=(parseInt(hkData.main.temp))
    })
    fetch(dubai)
    .then(function(response){
        let dubaiData=response.json()
        return dubaiData
    })
    .then(function(dubaiData){
        dubaiTemp=(parseInt(dubaiData.main.temp))
    })
    .then(function(){
        displayWeather()
    })
    .then(function(){
        changeBGImage()
    })
}
function getWeather(lat, long) {
    longitude = long
    latitude = lat
    let api='http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&units=imperial'+'&lon='+longitude+'&appid='+key

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
    let seattle='http://api.openweathermap.org/data/2.5/weather?q=seattle&units=imperial&appid='+key
    fetch(seattle)
    .then(function (response){
        let seattleData=response.json()
        return seattleData
    })
    .then(function(seattleData){
        seattleTemp=(parseInt(seattleData.main.temp))
    })
    let tokyo='http://api.openweathermap.org/data/2.5/weather?q=tokyo&units=imperial&appid='+key
    fetch(tokyo)
    .then(function (response){
        let tokyoData=response.json()
        return tokyoData
    })
    .then(function(tokyoData){
        tokyoTemp=(parseInt(tokyoData.main.temp))
    })
    let london='http://api.openweathermap.org/data/2.5/weather?q=london&units=imperial&appid='+key
    fetch(london)
    .then(function (response){
        let londonData=response.json()
        return londonData
    })
    .then(function(londonData){
        londonTemp=(parseInt(londonData.main.temp))
    })
    let moscow='http://api.openweathermap.org/data/2.5/weather?q=moscow&units=imperial&appid='+key
    fetch(moscow)
    .then(function (response){
        let moscowData=response.json()
        return moscowData
    })
    .then(function(moscowData){
        moscowTemp=(parseInt(moscowData.main.temp))
    })
    let paris='http://api.openweathermap.org/data/2.5/weather?q=paris&units=imperial&appid='+key
    fetch(paris)
    .then(function(response){
        let parisData=response.json()
        return parisData
    })
    .then(function(parisData){
        parisTemp=(parseInt(parisData.main.temp))
    })
    let newyork = 'http://api.openweathermap.org/data/2.5/weather?q=new%20york&units=imperial&appid='+key
    fetch(newyork)
    .then(function(response){
        let nyData=response.json()
        return nyData
    })
    .then(function(nyData){
        newyorkTemp=(parseInt(nyData.main.temp))
    })
    let rome = 'http://api.openweathermap.org/data/2.5/weather?q=rome&units=imperial&appid='+key
    fetch(rome)
    .then(function(response){
        let romeData=response.json()
        return romeData
    })
    .then(function(romeData){
        romeTemp = (parseInt(romeData.main.temp))
    })
    let delhi = 'http://api.openweathermap.org/data/2.5/weather?q=delhi&units=imperial&appid='+key
    fetch(delhi)
    .then(function(response){
        let delhiData=response.json()
        return delhiData
    })
    .then(function(delhiData){
        delhiTemp=(parseInt(delhiData.main.temp))
    })
    let hongkong = 'http://api.openweathermap.org/data/2.5/weather?q=hong%20kong&units=imperial&appid='+key
    fetch(hongkong)
    .then(function(response){
        let hkData=response.json()
        return hkData
    })
    .then(function(hkData){
        hkTemp=(parseInt(hkData.main.temp))
    })
    let dubai = 'http://api.openweathermap.org/data/2.5/weather?q=dubai&units=imperial&appid='+key
    fetch(dubai)
    .then(function(response){
        let dubaiData=response.json()
        return dubaiData
    })
    .then(function(dubaiData){
        dubaiTemp=(parseInt(dubaiData.main.temp))
    })
    .then(function(){
        displayWeather()
    })
    .then(function(){
        changeBGImage()
    })
}



function displayWeather() {
    iconElement.innerHTML="<img src=http://openweathermap.org/img/wn/"+weather.iconId+"@2x.png>"
    tempElement.innerHTML=weather.temperature.value + '°<span>F<span>'
    descElement.innerHTML=weather.description
    locationElement.innerHTML= weather.city + ', ' + weather.country
    popularCitiesTemp.innerHTML = "Seattle, USA: "+seattleTemp+"°F"+'\n'
                                +"London, United Kingdom: "+londonTemp+"°F"+'\n'
                                +"Tokyo, Japan: "+tokyoTemp+"°F"+'\n'
                                +"Moscow, Russia: "+moscowTemp+"°F"+'\n'
                                +"Paris, France: "+parisTemp+"°F"+'\n'
                                +"New York, USA: "+newyorkTemp+"°F"+'\n'
                                +"Rome, Italy: "+romeTemp+"°F"+'\n'
                                +"Delhi, India: "+delhiTemp+"°F"+'\n'
                                +"Hong Kong, China: "+hkTemp+"°F"+'\n'
                                +"Dubai, UAE: "+dubaiTemp+"°F"+'\n'

    
    advancedStats.innerHTML="Feels like: "+tempFeelsLike+"°F"+'\n'+"Minimum Temperature: "+minimumTemp+'°F'+'\n'+"Maximum Temperature: "+maximumTemp+'°F'+'\n'+"Pressure: "+pressure+'\n'+
                            "Humidity: "+humidity+'%'+'\n'+"Wind Speed: "+windSpeed+"mph"+'\n'+"Gust Speed: "+gustSpeed+"mph"+'\n'+"Visbility: "+visibility+"m"
                            +'\n'+"Number of Clouds: "+numClouds;
}



function changeBGImage(){
    if(weather.iconId === '11d') {
        document.body.style.backgroundImage = "url('pictures/weather-bg/thunderstorm.jpg')";
    }
    else if(weather.iconId === '09d') {
        document.body.style.backgroundImage = "url('pictures/weather-bg/drizzle.jpg')";
    }
    else if(weather.iconId === '10d' || weather.iconId === '13d' || weather.iconId === '09d') {
        document.body.style.backgroundImage = "url('pictures/weather-bg/rain.jpg')";
    }
    else if(weather.iconId === '13d') {
        document.body.style.backgroundImage = "url('pictures/weather-bg/snow.jpg')";
    }
    else if(weather.iconId === '50d') {
        document.body.style.backgroundImage = "url('pictures/weather-bg/lowvis.jpg')";
    }
    else if(weather.iconId === '01d' || weather.iconId === '01n') {
        document.body.style.backgroundImage = "url('pictures/weather-bg/clear.jpg')";
    }
    else if(weather.iconId === '02d' || weather.iconId === '02n' || weather.iconId === '03d'
     || weather.iconId === '03n' || weather.iconId === '04d' || weather.iconId === '04n') {
        document.body.style.backgroundImage = "url('pictures/weather-bg/clouds.jpg')";
    }
}
