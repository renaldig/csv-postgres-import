const request = require('request');
//Modify url with custom url redirected to file within the locale of the url
const CSV_LOCALE_URL = 'http://renaldigondosubroto.com/orders.csv';

//Async method to return Promise for connection request to database
const getData = async () => {
    return new Promise(function (resolve, reject) {
        request(CSV_LOCALE_URL, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                resolve(body);
            } else {
                reject(error);
            }
        });
    });
};

const serv = require('./../config/knex-config');
const knex = require('knex')(serv.pg);

//Stop connection to database by knex
const connectionRelease = async() => {
    await knex.destroy();
}

module.exports = {
    getData,
    knex,
    connectionRelease
}
