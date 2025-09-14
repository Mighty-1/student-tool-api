const express = require('express');
const router = express.Router();

const stateRoutes = require('./state.routes');
const instituteRoutes = require('./institute.routes');
const instTypeRoutes = require('./instType.routes');
const courseRoutes = require('./course.routes');

// Use the state routes
router.use('/states', stateRoutes);
// Use the institute routes
router.use('/institutes', instituteRoutes);
// Use the institute type routes
router.use('/institute-types', instTypeRoutes);
// Use the course routes
router.use('/courses', courseRoutes);

// Export the router
module.exports = router;