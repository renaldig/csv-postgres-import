const request = require('request');
//Modify url with custom url redirected to file within the url
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

module.exports = {
    getData
}
