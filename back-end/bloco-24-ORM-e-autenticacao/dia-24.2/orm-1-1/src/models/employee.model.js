module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('Employee', { //Aqui se define o nome da Model Employee
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        age: DataTypes.INTEGER,
    },
    {
        timestamps: false,
        tableName: 'employees',
        underscored: true,
    });

    Employee.associate = (models) => {
        Employee.hasMany(models.Address, //Este Address referencia nome da Model//
            { foreignKey: 'employeeId', as: 'addresses' });
    };

    return Employee;
}