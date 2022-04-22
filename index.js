const express = require('express');
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
require('dotenv').config()

var app = express();

const port = process.env.PORT || 3000;

app.get('/' , (req,res) => {
    res.send("Welcome")
});

//Sehrin havadurumu   => /havadurumu/istenilensehir exp:LosAngeles
app.get('/weather/:city' ,(req,res) => {

    geocode.geocode(req.params.city, (err,{latitude,longitude}) => {
        if(err){
            return res.send(err)
        }else{
            forecast.forecast(latitude, longitude, (err, forecastData) => {
                if(err) {
                    return res.send(err)
                }
                return res.send(forecastData)
            })
        }
    })
    
})


app.listen(port, () => {
    console.log("server is running on "+ port);
});