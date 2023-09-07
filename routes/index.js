// Main route file
const express = require('express');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

module.exports = router;
