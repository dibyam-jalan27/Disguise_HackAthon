
const API_KEY = "2dfd0acbe3a61e486f3e36924c80b318";
const getIcon = (iconID) => `http://openweathermap.org/img/wn/${iconID}@2x.png`;

const getWeatherData = async (city ) => {
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2dfd0acbe3a61e486f3e36924c80b318`;
 
    const weatherData = await fetch(url)
    .then((res) => res.json())
    .then((weatherData) => weatherData);

    //Destructuring
    const { weather , 
        main : { temp , feels_like , temp_min, temp_max , pressure , humidity },
        wind : {speed} ,
        sys : {country} ,
        name  } = weatherData ;

    // get weather and icon 
    const {description , icon} = weather[0];
    return {
        description,
        iconURL: getIcon(icon),
        temp,
        feels_like,
        temp_min,
        temp_max,
        pressure,
        humidity,
        speed,
        country,
        name
    };
    
};

export {getWeatherData};
// ° 