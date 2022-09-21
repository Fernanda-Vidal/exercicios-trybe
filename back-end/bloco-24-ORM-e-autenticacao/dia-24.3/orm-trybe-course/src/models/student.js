const StudentSchema = (sequelize, DataTypes) => {
    const StudentTable = sequelize.define('Student', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        birthday: DataTypes.DATE,
        active: DataTypes.BOOLEAN,
        password: DataTypes.STRING,
        idCourse: DataTypes.INTEGER  
    }, {
        tableName: 'students',
        underscored: true,
        timestamps: false
    })
};

module.exports = StudentSchema;