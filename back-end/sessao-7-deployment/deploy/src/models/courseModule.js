const CourseModuleSchema = (sequelize, DataTypes) => {
    const CourseModuleTable = sequelize.define('CourseModule', 
    {},
    {
        timestamps: false,
        tableName: 'course_modules',
        underscored: true,
    });

    CourseModuleTable.associate = (models) => {
        models.Course.belongsToMany(models.Module, {
            as: "modules",
            through: CourseModuleTable,
            foreignKey: 'id_course',
            otherKey: 'id_module'
        });
        models.Module.belongsToMany(models.Course, {
            as: "courses",
            through: CourseModuleTable,
            foreignKey: 'id_module',
            otherKey: 'id_course'
        });
    }

    return CourseModuleTable;
}

module.exports = CourseModuleSchema;