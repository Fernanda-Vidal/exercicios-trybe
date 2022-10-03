const studentService = require('../services/student.service');

const getStudents = async (_req, res, next) => {
    try {
        const students = await studentService.getStudents();
        return res.status(200).json(students);
    } catch (err) {
        next(err)
    }
};

module.exports = {
    getStudents,
};