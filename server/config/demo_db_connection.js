// import { createConnection } from 'mysql';
const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('database', 'username', 'password', {
const sequelize = new Sequelize('code_zero', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
});


// Test the connection
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports =  { sequelize };
