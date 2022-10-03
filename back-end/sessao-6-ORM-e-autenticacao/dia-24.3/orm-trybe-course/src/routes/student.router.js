const { Router } = require('express');
const studentController = require('../controllers/student.controller');

const routers = Router();

routers.get('/', studentController.getStudents);

module.exports = routers;