/* Use these scripts to create the necessary tables for the database */

CREATE TABLE IF NOT EXISTS customers (
         id SERIAL,
         customerId   char(16)     NOT NULL DEFAULT '',
         firstName    VARCHAR(30)   NOT NULL DEFAULT '',
         lastName     VARCHAR(30)   NOT NULL,
         PRIMARY KEY  (customerId)
       );

CREATE TABLE IF NOT EXISTS orders (
        id  SERIAL,
        orderId   char(16)  NOT NULL DEFAULT '',
        customerId   char(16)  REFERENCES customers(customerId),
        item    VARCHAR(50) NOT NULL DEFAULT '',
        quantity INT NOT NULL,
        PRIMARY KEY  (orderId)
      );
