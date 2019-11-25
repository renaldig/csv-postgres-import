//Retrieve data from customers with Async method through Knex
const { knex } = require('./connectInit');

const get = async (id) => {
    return await knex("customers").where({customerid: id});
}

module.exports = {
    get
}
