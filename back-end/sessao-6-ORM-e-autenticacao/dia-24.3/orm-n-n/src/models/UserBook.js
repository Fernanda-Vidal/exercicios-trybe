module.exports = (sequelize, _DataTypes) => {
    const UserBook = sequelize.define('UserBook',
    {},
    {
        timestamps: false,
        underscored: true,
        tableName: 'users_books'
    },
 );

 UserBook.associate = (models) => {
    models.Book.belongsToMany(models.User, {
        as: 'users',
        through: UserBook,
        foreignKey: 'bookId', //se refere ao id de Book na tabela de `users_books`
        otherKey: 'userId', //se refere à outra chave de `users_books`
    });
    models.User.belongsToMany(models.Book, {
        as: 'books',
        through: UserBook,
        foreignKey: 'userId', // se refere ao id de User na tabela `users_books`
        otherKey: 'bookId', // se refere à outra chave de `users_books`
    });
 };

 return UserBook;
};