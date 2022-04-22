//enlem ve boylam bilgilerinin tutulduğu yer
const axios = require('axios')

const getGeocode = async (url) => {
    try {
        return await axios.get(url)
        .then(res => {
            return res.data.features[0]
        })
    } catch (error) {
        console.log(error)
    }
}

const geocode = (city, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(city) + '.json?access_token=pk.eyJ1IjoienlucCIsImEiOiJjbDI5aGltYWEwamRpM3RtbWRrZzUxNXp4In0.o6WihMVWSfZ_wi6pKhpt_w';
    getGeocode(url)
    .then(res => {
        if(res) {
            return callback(undefined, res.center)
        } else {
            return callback('hatalı istek', undefined)
        }
    })
    .catch (err => console.log(err))
}

module.exports = geocode;