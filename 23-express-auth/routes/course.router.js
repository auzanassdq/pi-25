const express = require("express")
const router = express.Router();

const {
    getAllCourse,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse
} = require("../controllers/course.controller");
const { verifyToken } = require("../middleware/auth");

router.get("/", getAllCourse)
router.get("/:id", getCourseById)
router.post("/", verifyToken, createCourse)
router.put("/:id", verifyToken, updateCourse)
router.delete("/:id", verifyToken, deleteCourse)

module.exports = router;
