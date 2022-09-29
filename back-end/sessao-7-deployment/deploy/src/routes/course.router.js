const { Router } = require('express');
const courseController = require('../controllers/course.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const courseMiddleware = require('../middlewares/course.middleware');

const routers = Router();

routers.put('/:id', courseMiddleware, courseController.updateCourse);
routers.post('/', courseMiddleware, courseController.createCourse);
routers.get('/:id', courseController.getCourseById);
routers.get('/', authMiddleware, courseController.getCourses);
routers.delete('/:id', courseController.removeCourse);


module.exports = routers;