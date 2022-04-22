//enlem ve boylam bilgileri degerlendirilir

const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7d65e9275167f07f608e49cfa2edbbd3&query=' + latitude + ',' + longitude + '&units=m';

    request({url:url, json:true},(error, response) => {
        if(error){
            return callback('Unable to connect to weather service',undefined)
        }else{
            console.log('response.body.current',response.body.current);
            const data = {
            temprature : response.body.current.temperature,
            weather_desc : response.body.current.weather_descriptions[0],
            feelslike : response.body.current.feelslike
        }
            
            callback(undefined, data)
        }
    })
}


module.exports = {
    forecast : forecast
}