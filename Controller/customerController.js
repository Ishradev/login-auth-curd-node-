// controllers/customerController.js
const { Customer } = require('../models'); // Ensure the Customer model is imported correctly

// Create a new customer
// controllers/customerController.js
const createCustomer = async (req, res) => {
  try {
    const { name, address, mark, percent, tamil, english, computer, math, social, science } = req.body;
    const customer = await Customer.create({
      name,
      address,
      mark,
      percent,
      tamil,
      english,
      computer,
      math,
      social,
      science,
    });

    // Respond with a success message and the customer data
    res.status(201).json({
      message: 'Customer created successfully',  // Friendly success message
      customer: customer  // Send the created customer data
    });
  } catch (error) {
    console.error("Error creating customer:", error);
    res.status(400).json({
      message: 'Error creating customer',  // Error message
      error: error.message  // Send the error details
    });
  }
};



// Get all customers
const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.status(200).json(customers);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching customers', error });
  }
};

// Get a single customer by ID
const getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.status(200).json(customer);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching customer', error });
  }
};


// Update customer by ID
const updateCustomer = async (req, res) => {
  try {
    const { name, address, mark, percent, tamil, english, computer, math, social, science } = req.body;
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    // Update fields with the provided data or keep the existing value if not provided
    customer.name = name || customer.name;
    customer.address = address || customer.address;
    customer.mark = mark || customer.mark; // Fixed the typo here from 'totalmarkmark' to 'mark'
    customer.percent = percent || customer.percent;
    customer.tamil = tamil || customer.tamil;
    customer.english = english || customer.english;
    customer.computer = computer || customer.computer;
    customer.math = math || customer.math;
    customer.social = social || customer.social;
    customer.science = science || customer.science;

    // Save the updated customer
    await customer.save();

    // Return success message with the updated customer data
    res.status(200).json({
      message: 'Customer updated successfully',  // Success message
      customer: customer  // Return the updated customer data
    });
  } catch (error) {
    // Handle errors and send error response
    res.status(400).json({ message: 'Error updating customer', error: error.message });
  }
};


// Delete customer by ID
const deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    await customer.destroy();
    res.status(200).json({ message: 'Customer deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting customer', error });
  }
};

module.exports = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
