//Insert and get method for orders table by knex
const { knex } = require('./knex-connect');

const insertData = async (order) => {
    return await knex("orders").insert(order);
};

const getData = async (orderId) => {
    return await knex("orders").where({orderid: orderId});
};

module.exports = {
    insertData,
    getData
}
