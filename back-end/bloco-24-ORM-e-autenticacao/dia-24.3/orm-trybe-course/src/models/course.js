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
    
    return CourseTable;
}

module.exports = CourseSchema;