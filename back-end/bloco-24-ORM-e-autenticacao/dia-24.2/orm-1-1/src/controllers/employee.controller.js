const EmployeeService = require('../services/employee.service');

const getAll = async (_req, res) => {
    try{
        const employees = await EmployeeService.getAll();
        return res.status(200).json(employees);
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: 'Ocorreu um erro' });
    };
};

const getById = async (req, res) => {
    console.log('req', req)
    try {
        const { id } = req.params;
        const employee = await EmployeeService.getById(id);

        if (!employee) return res.status(404).json({ message: 'Colaborador não encontrado' });
        return res.status(200).json(employee);
    } catch (e) {
        console.log(e.message);
        return res.status(500).json({ message: 'Ocorreu um erro' });
    };
}

module.exports = {
    getAll,
    getById,
};