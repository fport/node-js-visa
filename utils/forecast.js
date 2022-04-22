//enlem ve boylam bilgileri weatherstack apide kullanılır
const axios = require('axios');

const getForecast = async (url) => {
    try {
        return await axios.get(url)
        .then(res => {
            return res.data.current
        })
    } catch (error) {
        console.log(error)
    }
}

const forecast = (cords, callback) => {
    const accessKey = process.env.ACCESS_KEY;
    const url = `http://api.weatherstack.com/current?access_key=${accessKey}&query=${cords[0]},${cords[1]}&units=m`;

    getForecast(url)
    .then(res => {
        if(res) {
            console.log('osman=>',res);
            const data = {
                temprature : res.temperature,
                weather_desc : res.weather_descriptions[0],
                feelslike : res.feelslike
            }
            return callback(undefined, data)
        } else {
            return callback('hatalı istek', undefined)
        }
    })
    .catch (err => console.log(err))
}

module.exports = forecast;