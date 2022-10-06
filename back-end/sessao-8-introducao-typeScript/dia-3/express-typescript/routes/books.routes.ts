import { Router } from 'express';
import BookController from '../controllers/books.controller';

const router = Router();

const booksController = new BookController();

router.get('/books', booksController.getAll);
router.post('/books', booksController.create);
router.get('/books/:id', booksController.getById);

export default router;