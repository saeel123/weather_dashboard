const express = require('express');
const router = express.Router();

const fs = require('fs');
const csv = require('fast-csv');



router.get('/register', (req, res, next) => {

    console.log("test");
    

    var sortData = [];
    var wind = [];
    var solar = [];
    var hydro = [];
    var gas_waste = [];
    var biomas = [];
    var hydro_waste = [];

    fs.createReadStream('Data.tsv')
        .pipe(csv())
        .on('data', function (data) {

            var t =  data[0].split('\t');
            var latlong = {
                'type' : t[0],
                'lat': Number(t[1]),
                'lng': Number(data[1])
            }
            sortData.push(latlong); 
        })
        .on('end', function(data) {
            sortData.shift();
        

        for (let i = 0; i < sortData.length; i++) {
            const element = sortData[i];
            if(element.type == "wind"){
                wind.push(element);
            } else if (element.type == "solar") {
                solar.push(element);
            } else if (element.type == "hydro") {
                hydro.push(element);              
            } else if (element.type == "gas_waste") {
                gas_waste.push(element);                             
            } else if (element.type == "biomass") {
                biomas.push(element);                             
            } else if (element.type == "hydro_waste") {
                hydro_waste.push(element);                             
            }

        }

        var finalData = {
            wind : wind,
            solar : solar,
            hydro : hydro,
            gas_waste : gas_waste,            
            biomas : biomas,
            hydro_waste: hydro_waste
        }

        console.log(finalData);
        

        res.json({success: true, msg: 'tsv data fetched', data : finalData});
    });

});

module.exports = router;