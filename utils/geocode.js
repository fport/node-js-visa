//enlem ve boylam bilgilerinin tutulduğu yer

const request = require('request');

const geocode = (city, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(city) + '.json?access_token=pk.eyJ1IjoienlucCIsImEiOiJjbDI5aGltYWEwamRpM3RtbWRrZzUxNXp4In0.o6WihMVWSfZ_wi6pKhpt_w';
    // console.log('LosAngeles',url);
     // url,error,res
    request({url: url,json:true}, (error,response) => {
        if(error) {
            callback('Unable to connect to geocoding services',undefined)
        }else{
            // console.log('response',response.body.features[0]);
            callback(undefined, response.body.features[0].center[1], response.body.features[0].center[0])
        }
    })
}

module.exports = {geocode : geocode}