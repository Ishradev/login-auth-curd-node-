// routes/customerRoutes.js
const express = require('express');
const router = express.Router();
const customerController = require('../Controller/customerController');

// Create customer
router.post('/customers', customerController.createCustomer);

// Get all customers
router.get('/customers', customerController.getAllCustomers);

// Get a customer by ID
router.get('/customers/:id', customerController.getCustomerById);

// Update customer by ID
router.put('/customers/:id', customerController.updateCustomer);

// Delete customer by ID
router.delete('/customers/:id', customerController.deleteCustomer);

module.exports = router;
