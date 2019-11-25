//Change connection paramaters according to username, password, port, and name of database
// 'postgres://username:password@localhost:port_number/database_name'

module.exports =
    {
        pg:
            {
                client: 'pg',
                connection: 'postgres://postgres:Idlanerg123@localhost:5432/sales',
                debug: false,
                pool: { min: 1, max: 10 }
            }
    };
