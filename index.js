const express = require('express');
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
require('dotenv').config()

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

/**
 * @api {get} / Test
 */
app.get('/' , (req,res) => {
    res.send("Welcome")
});

/**
 * @api {get} /weather/:city Get a city weather information
 */
app.get('/weather/:city' ,(req,res) => {
    geocode(req.params.city, (err, cords) => {
        if(!err) {
            forecast(cords, (err, forecastData) => {
                if(!err) {
                    return res.send(forecastData)
                }
                return res.send(err)
            })
        }
    })
})

app.listen(port, () => {
    console.log("server is running on "+ port);
});