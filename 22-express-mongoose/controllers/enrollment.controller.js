const Enrollment = require("../models/enrollment.model");

module.exports = {
    getAllEnrollment: async (req, res) => {
        try {
            const enrollments = await Enrollment.find().populate("userId").populate("courseId");
            res.json({
                message: "Successfully get all enrollments",
                data: enrollments
            })
        } catch (error) {
            res.status(500).json({message: "Internal server error", error: error.message});
        }
    },
    getEnrollmentById: (req, res) => {},
    createEnrollment: (req, res) => {
        try {
            const {userId, courseId} = req.body;
            const newEnrollment = new Enrollment({
                userId,
                courseId
            });
            newEnrollment.save()
              
            res.status(201).json({message: "Enrollment created successfully"});
        } catch (error) {
            res.status(500).json({message: "Internal server error", error: error.message});
        }
    },
    updateEnrollment: (req, res) => {},
    deleteEnrollment: (req, res) => {}
}
