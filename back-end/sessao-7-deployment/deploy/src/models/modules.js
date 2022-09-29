const ModuleSchema = (sequelize, DataTypes) => {
    const ModuleTable = sequelize.define('Module', {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        duration: DataTypes.DECIMAL,
        qtdBlock: DataTypes.DECIMAL
    }, {
        underscored: true,
        tableName: 'modules',
        timestamps: false
    })

    return ModuleTable;
};

module.exports = ModuleSchema;