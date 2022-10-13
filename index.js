// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: 'sql_store'
});

const invi_con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: 'sql_inventory'
});

// simple query
// connection.query('SELECT * FROM `customers` LIMIT 3', response);

// callback function to handle the query result
function response(err, results, fields) {
    if (err) console.log(err);
    console.log(results); // results contains rows returned by server
}



// read all customers Promise Based
async function readAllCustomersPromise() {
    try {
        const [rows, fields] = await connection.promise().query('SELECT * FROM `customers`');
        console.log(rows);
    } catch (error) {
        console.log(error);
    }
}

// update customer Promise Based
async function updateCustomerPromise() {
    try {
        const [rows, fields] = await connection.promise().query('UPDATE `customers` SET `first_name` = ?, `last_name` = ? WHERE `customer_id` = ?', ['John Doe', 'Salape', 1]);
        console.log(rows);
    } catch (error) {
        console.log(error);
    }
}

// insert customer Promise Based
async function insertCustomerPromise() {
    try {
        const [rows, fields] = await connection.promise().query('INSERT INTO `customers` (`first_name`, `last_name`, `address`, `city`, `state`, `points`) VALUES (?, ?, ?, ?, ?, ?)', ['Jet', 'Salape', '123 Main St', 'New York', 'NY', 100]);
        console.log(rows);
    } catch (error) {
        console.log(error);
    }
}

// delete customer Promise Based
async function deleteCustomerPromise() {
    try {
        const [rows, fields] = await connection.promise().query('DELETE FROM `customers` WHERE `customer_id` = ?', [12]);
        console.log(rows);
    } catch (error) {
        console.log(error);
    }
}



// read all customers Callback Based
function readAllCustomersCallback() {
    connection.query('SELECT * FROM `customers`', response);
}

// update customer Callback Based
function updateCustomerCallback() {
    connection.query('UPDATE `customers` SET `first_name` = ?, `last_name` = ? WHERE `customer_id` = ?', ['John Doe', 'Salape', 13], response);
}

// insert customer Callback Based
function insertCustomerCallback() {
    connection.query('INSERT INTO `customers` (`first_name`, `last_name`, `address`, `city`, `state`, `points`) VALUES (?, ?, ?, ?, ?, ?)', ['Jet', 'Salape', '123 Main St', 'New York', 'NY', 100], response);
}

// delete customer Callback Based
function deleteCustomerCallback() {
    connection.query('DELETE FROM `customers` WHERE `customer_id` = ?', [19], response);
}
readAllCustomersCallback();

