const csvParse = require('csv-parse');

// Function to parse data from csv file through Async method and resolve output
const parse = async (csvData) => {
    return new Promise(function (resolve, reject) {
        const output = []
        csvParse(csvData, {
            trim: true,
            skip_empty_lines: true
        })
            .on('readable', function () {
                let field
                while (field = this.read()) {
                    output.push(field)
                }
            })
            // Compare parsed output with expected output
            .on('end', () => {
                resolve(output);

            }).on('error', (e) => {
                reject(e);
        })
    });
};

module.exports = {
    parse
};
