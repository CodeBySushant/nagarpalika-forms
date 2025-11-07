// src/config/db.js
const mysql = require('mysql2/promise');

// Database connection config
const dbConfig = {
    host: 'localhost',
    user: 'root',       // Default XAMPP username
    password: '',       // Default XAMPP password is blank
    database: 'nagarpalika_db' // The database you must create in phpMyAdmin
};

// Create a connection pool
const pool = mysql.createPool(dbConfig);

// Test the connection
pool.getConnection()
    .then(connection => {
        console.log('✅ MySQL Database connected successfully.');
        connection.release();
    })
    .catch(error => {
        console.error('❌ MySQL Database connection failed:', error.message);
    });

module.exports = pool;