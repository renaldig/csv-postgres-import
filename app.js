const CronJob = require('cron').CronJob;
const connectInit = require('./src/services/connectInit');
const csvParser = require('./src/util/csvParser');
const customerModule = require('./src/services/CustomerModule');
const orderModule = require('./src/services/OrderModule');
var iterations = 0;

//Read in data from CSV file
const job = new CronJob('* * * * * *', async () => {
    if(iterations == 0){

        //Retrieve data from orders table
        const ordersCsv = await connectInit.getData();
        console.log(ordersCsv);
        let orderFields;

        //Perform parsing of the csv
        try {
            orderFields = await csvParser.parse(ordersCsv);
            console.log(`Order Fields : ${orderFields}`);
        } catch (e) {
            console.error(e);
        }

        orderFields.shift();
        await updateOrders(orderFields);
        iterations++;
    }
}, null, true);

//Set timeout of connection attempt to 15 seconds
setTimeout(function () {
    console.log('Terminating job...');
    job.stop();
    return;
}, 15000);

//Update database with values to insert with Async method
updateOrders = async (orders) => {
    orders.forEach(async data => {
        try {
            const result = await orderModule.insertData({
                orderid: data[0],
                customerid: data[1],
                item: data[2],
                quantity: data[3]
            });
        } catch (e) {
            console.error(`Error in job occured ${e.message}`);
        }
    });
};
