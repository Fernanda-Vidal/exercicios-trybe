const userBookService = require('../services/userBook.service');

const getUserBooksById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userBookService.getUserBooksById(Number(id));
        console.log('req',req.params);
        
        if (!user) return res.status(404).json({ message: 'Pessoa não encontrada' });
        return res.status(200).json(user);
    } catch (e) {
        return res.status(500).json({ message: 'Algo deu errado' });
    };
};

module.exports = {
    getUserBooksById,
};