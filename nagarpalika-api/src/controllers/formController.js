// src/controllers/formController.js
const pool = require('../config/db'); // Import the database connection

// This function will handle the "Elderly Allowance" form
exports.submitElderlyAllowance = async (req, res) => {
    try {
        // 1. Get all the data from the React form
        const {
            municipality,
            ward,
            applicantName,
            gender,
            fatherName,
            motherName
            // ... add ALL other fields from your form here
        } = req.body;

        // 2. Define your SQL query to insert the data
        //    Make sure 'elderly_allowance' table exists in your database
        const sql = `
            INSERT INTO elderly_allowance 
            (municipality, ward, applicantName, gender, fatherName, motherName) 
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        
        // 3. Run the query
        await pool.query(sql, [
            municipality,
            ward,
            applicantName,
            gender,
            fatherName,
            motherName
            // ... add the variables in the same order
        ]);
        
        // 4. Send a success response back to React
        res.status(201).json({ message: 'Form submitted successfully!' });

    } catch (error) {
        console.error('Error submitting form:', error);
        res.status(500).json({ error: 'Failed to submit form.' });
    }
};

// You will add more functions here for your other forms
exports.submitPassportRecommendation = async (req, res) => {
    // ... logic for saving passport data to a 'passport_recommendations' table ...
    res.status(201).json({ message: 'Passport form submitted!' });
};

exports.submitCertification = async (req, res) => {
    // ... logic for saving certification data ...
    res.status(201).json({ message: 'Certification form submitted!' });
};