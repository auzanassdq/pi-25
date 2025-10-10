const express = require('express');
const router = express.Router();

const userRoutes = require('./user.router');
const courseRoutes = require('./course.router');
const enrollmentRoutes = require('./enrollment.router');
const authRoutes = require('./auth.router');
const { verifyToken } = require('../middleware/auth');

router.use("/auth", authRoutes);


router.use("/courses", courseRoutes);
router.use("/users", verifyToken, userRoutes);
router.use("/enrollments", verifyToken, enrollmentRoutes);

module.exports = router;