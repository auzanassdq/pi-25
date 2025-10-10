const mongoose = require("mongoose");
const {Schema} = mongoose;

const courseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;