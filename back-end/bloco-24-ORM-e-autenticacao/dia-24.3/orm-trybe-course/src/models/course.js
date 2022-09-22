const CourseSchema = (sequelize, DataTypes) => {
    const CourseTable = sequelize.define('Course', {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        active: DataTypes.BOOLEAN,
        duration: DataTypes.INTEGER,
    }, {
        timestamps: false,
        underscored: true,
        tableName: 'courses',
    });

    CourseTable.associate = (models) => {
        CourseTable.hasMany(models.Student, {
            as: "students",
            foreignKey: "idCourse" //referencia a tabela que está no model Student.
        })
    }
    
    return CourseTable;
}

module.exports = CourseSchema;