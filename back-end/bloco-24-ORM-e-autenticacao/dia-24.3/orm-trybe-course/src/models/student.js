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

    StudentTable.associate = (models) => {
        StudentTable.belongsTo(models.Course, //esse 'Course' é o nome do model que veio no define
        {    
            as: "course",
            foreignKey: "idCourse"
        })
    }

    return StudentTable;
};

module.exports = StudentSchema;