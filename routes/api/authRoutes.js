// Auth routes (login, logout, signup)
const express = require('express');
const router = express.Router();
const sequelize = require('../../config/config');
const authController = require('../../controllers/authController'); // Import auth controller

// POST /api/auth/login
router.get('/', authController.login);

