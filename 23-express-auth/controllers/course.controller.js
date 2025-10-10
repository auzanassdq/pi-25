const Course = require("../models/course.model");

module.exports = {
    getAllCourse: async (req, res) => {
        try {
            const courses = await Course.find();
            res.json({
                message: "Successfully get all courses",
                data: courses
            })
        } catch (error) {
            res.status(500).json({message: "Internal server error", error: error.message});
        }
    },
    getCourseById: (req, res) => {},
    createCourse: (req, res) => {
        try {
            const {name, description, price} = req.body;
            const newCourse = new Course({
                name,
                description,
                price
            });
            newCourse.save()
              
            res.status(201).json({message: "Course created successfully"});

        } catch (error) {
            res.status(500).json({message: "Internal server error", error: error.message});
        }
    },
    updateCourse: (req, res) => {},
    deleteCourse: (req, res) => {}
}
