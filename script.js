const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '5a2a31c2b4msh15c142ed039d015p1f4955jsn7aa4b34d18e1',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {

    cityName.innerHTML = city

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {

            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = new Date(response.sunrise * 1000).toLocaleString()
            sunset.innerHTML = new Date(response.sunset * 1000).toLocaleString()

            // const conDate = () => {
            //     let x = new Date(response.sunrise * 1000)
            //     console.log(x)
            // }

            // conDate()
            console.log(response.sunrise)
            console.log(response)
        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
})


getWeather("islamabad");
// conDate();