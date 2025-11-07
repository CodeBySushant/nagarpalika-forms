// src/routes/formRoutes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/formController'); // Import your logic

// When React POSTs to /api/forms/elderly-allowance, run this function
router.post('/elderly-allowance', controller.submitElderlyAllowance);

// When React POSTs to /api/forms/passport-recommendation
router.post('/passport-recommendation', controller.submitPassportRecommendation);

// When React POSTs to /api/forms/certification
router.post('/certification', controller.submitCertification);

// ... add a new route for every form you have ...

module.exports = router;