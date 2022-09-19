module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define('Address', { // Aqui se define o nome da Model Address//
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        city: DataTypes.STRING,
        street: DataTypes.STRING,
        number: DataTypes.INTEGER,
        employeeId: { type: DataTypes.INTEGER, foreignKey: true },
    },
    {
        timestamps: false,
        tableName: 'addresses',
        underscored: true,
    });

    Address.associate = (models) => {
        Address.belongsTo(models.Employee, //Este Employee referencia o nome da model//
            { foreignKey: 'employeeId', as: 'employees' });
    };

    return Address;
};