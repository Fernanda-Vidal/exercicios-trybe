const { Router } = require('express');
const courseController = require('../controllers/course.controller');

const routers = Router();

routers.post('/', courseController.createCourse);
routers.put('/:id', courseController.updateCourse);
routers.get('/:id', courseController.getCourseById);
routers.get('/', courseController.getCourses);
routers.delete('/:id', courseController.removeCourse);

module.exports = routers;