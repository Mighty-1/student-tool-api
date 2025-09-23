const express = require("express");
const {protect} = require("../utils/authMiddleware");
const router = express.Router();

const stateRoutes = require("./state.routes");
const instituteRoutes = require("./institute.routes");
const instTypeRoutes = require("./instType.routes");
const courseRoutes = require("./course.routes");
const authRoutes = require("./auth.routes");

// Use the auth routes
router.use("/auth", authRoutes);
// Use the state routes
router.use("/states", protect, stateRoutes);
// Use the institute routes
router.use("/institutes", protect, instituteRoutes);
// Use the institute type routes
router.use("/institute-types", protect, instTypeRoutes);
// Use the course routes
router.use("/courses", protect, courseRoutes);

// Export the router
module.exports = router;
