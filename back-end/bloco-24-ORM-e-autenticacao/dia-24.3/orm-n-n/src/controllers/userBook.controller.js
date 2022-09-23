const userBookService = require('../services/userBook.service');

const getUserBooksById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userBookService.getUserBooksById(Number(id));
        console.log('req',user);
        
        if (!user) return res.status(404).json({ message: 'Pessoa não encontrada' });
        return res.status(200).json(user);
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: 'Algo deu errado' });
    };
};

// const getUser = async (_req, res) => {
//     try {
//         const users = await userBookService.getUser();
//         return res.status(200).json(users);
//     } catch (e) {
//         return res.status(500).json({ message: 'Deu bom, não' });
//     }
// }

module.exports = {
    getUserBooksById,
    // getUser,
};