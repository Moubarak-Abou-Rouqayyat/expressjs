const mysql = require('mysql');
//const dotenv = require('dotenv');
let instance = null;

//dotenv.config();

const connection = mysql.createConnection({
   /* host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT*/
    
    host: 'localhost',
    user: 'web_app',
    password: 'test123',
    database: 'web_app',
    port: '3306'
});

connection.connect((err) =>{
    if(err)
    {
        console.log(err.message);
    }
    console.log(connection.state);
});

class DbService {
    static getDbServiceInstance() {
        return instance ? instance : new DbService();
    }
}
