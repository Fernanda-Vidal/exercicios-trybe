const BooksModel = (sequelize, DataTypes) => {
    const BooksTable = sequelize.define('Book', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true },
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        pageQuantity: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        tableName: 'books',
        underscored: true
    });

    return BooksTable;
};

module.exports = BooksModel;