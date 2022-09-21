const { Course } = require('../models');

const createCourse = async ({ name, description, active, duration }) => {
    return Course.create({ name, description, active, duration });
};

const getCourses = async () => Course.findAll();

const getCourseById = async (id) => {
    const course = await Course.findByPk(id);

    if (course === null) {
        return null;
    } else {
        return course;
    }
};

const updateCourse = async (id, { name, description, active, duration }) => {
    const [qtdUpdated] = await Course.update(
        { name, description, active, duration },
        { where: { id } },
    );

    return qtdUpdated > 0;
};

const removeCourse = async (id) => {
    const qtdRemoved = await Course.destroy({ where: { id } });

    return qtdRemoved > 0;
}

module.exports = {
    createCourse,
    getCourses,
    getCourseById,
    updateCourse,
    removeCourse,
};