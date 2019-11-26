const connectInit = require('./src/services/connectInit');
const csvParser = require('./src/util/csvParser');
const customerModule = require('./src/services/CustomerModule');
const orderModule = require('./src/services/OrderModule');

//Function to read in data from CSV file and parse the data to JSON format to be
//inserted into the database as reqyured
async function csvToDatabase() {
        try{
            let ordersCsv = await connectInit.getData();
            console.log(ordersCsv);
            let orderFields = await csvParser.parse(ordersCsv);
            orderFields.shift();
            console.log(ordersFields);
            let orderUpdate = await updateOrders(orderFields);
        } catch (err) {
            console.error(err);
        }
};

csvToDatabase();

//Update database with values to insert with Async method
updateOrders = async (orders) => {
    orders.forEach(async value => {
        try {
            const result = await orderModule.insertData({
                orderid: value[0],
                customerid: value[1],
                item: value[2],
                quantity: value[3]
            });
        } catch (e) {
            console.error(`Error occured ${e.message}`);
        }
    });
};
