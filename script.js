

const URL = "https://api.openweathermap.org/data/2.5/weather";
let API_KEY = "7fc3fff0144e9b2e4ae7d5eb058757e6";

const search=document.getElementById('search')
const city=document.getElementById('city')
const temp=document.getElementById('temp')
const feels=document.getElementById('feels')
const weather=document.getElementById('weather')
let part2=document.querySelector('.part2')
let wind=document.querySelector('.wind')
let humidity=document.querySelector('.humidity')
let textcenter=document.querySelector('.text-center')
let spinnergrow=document.querySelector('.spinner-grow')
let containerfluid=document.querySelector('.container-fluid')

window.addEventListener('load', () =>{
    spinnergrow.classList.add("fade-loader")
    containerfluid.classList.add("container-show")
})


const getDetails = async() =>{

    const cityName=search.value
  


    const FULL_URL = `${URL}?q=${cityName}&appid=${API_KEY}&units=imperial`;

	const response=await fetch(`${FULL_URL}`)

    if(response.status == 404){
        textcenter.innerHTML="<h5>Enter a valid city name</h5>"
    }

else{
    var json=await response.json();
	
    
        console.log(json)
        textcenter.innerHTML=""
        city.innerText=`${json.name}, ${json.sys.country}`
        const dtemp=(json.main.temp - 32 ) * (5/9)
        temp.innerText=`${dtemp.toFixed(2)}°C`
        feels.innerText=`${json.main.feels_like}°F`
        const clmt=json.weather[0].main
        weather.innerText=`${clmt}`
        humidity.innerHTML=`<h2>${json.main.humidity}%</h2>`
        wind.innerHTML=`<h2>${json.wind.speed}km/hr</h2>`
        part2.innerHTML=`<img src=img/${clmt}.png  class="img-fluid">`
}
}
console.log(getDetails())
