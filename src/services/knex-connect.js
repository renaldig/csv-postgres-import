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
