const courseService = require('../services/course.service');

const createCourse = async (req, res, next) => {
    try {
        const newCourse = await courseService.createCourse(req.body);
        return res.status(201).json(newCourse);
    } catch (err) {
        next(err)
    }

};

const getCourses = async (_req, res) => {
    const courses = await courseService.getCourses();

    return res.status(200).json(courses);
};

const getCourseById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const course = await courseService.getCourseById(id);
        return res.status(200).json(course);
    } catch (err) {
        next (err)
    }
};

const updateCourse = async (req, res, next) => {
    try {
        const { id } = req.params;
        const isUpdated = await courseService.updateCourse(id, req.body);
        return res.status(200).json({ message: `Curso ${id} atualizado com sucesso`});
    } catch (err) {
        next(err)
    }
}

const removeCourse = async (req, res, next) => {
    try {
        const { id } = req.params;
        await courseService.removeCourse(id);
        return res.status(200).json({ message: `Curso ${id} removido com sucesso` });
    } catch (err) {
        next(err)
    }
}

module.exports = {
    createCourse,
    getCourses,
    getCourseById,
    updateCourse,
    removeCourse,
};