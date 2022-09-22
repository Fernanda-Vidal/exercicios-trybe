const { Course, Student, Module, sequelize } = require('../models');

const createCourse = async ({ name, description, active, duration, modules }) => {
    const result = await sequelize.transaction(async (t) => {
        const newCourse = await Course.create(
            { name, description, active, duration, modules },
            {
                include: [{ model: Module, as: "modules" }],
                transaction: t
            }
            );
            return newCourse;
        });
        return result;
};

const getCourses = async () => Course.findAll({
    include: [
        {
            model: Student,
            as: "students",
            attributes: { exclude: ["idCourse", "password"] } // usa-se qdo é uma coluna
        }, 
        {
            model: Module,
            as: "modules",
            through: { attributes: [] } // estou dizendo: "na tabela que é o através, não traga nenhuma coluna"
        }
    ]
});

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