import { Router } from 'express';
import BookController from '../controllers/books.controller';
import middlewareCreate from '../middlewares/middlewareCreate';


const router = Router();

const booksController = new BookController();

router.get('/books', booksController.getAll);
router.post('/books', middlewareCreate, booksController.create);
router.get('/books/:id', booksController.getById);

export default router;