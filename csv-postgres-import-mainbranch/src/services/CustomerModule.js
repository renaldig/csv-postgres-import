//Retrieve data from customers with Async method through Knex module
const { knex } = require('./knex-connect');

const get = async (id) => {
    return await knex("customers").where({customerid: id});
}

module.exports = {
    get
}
