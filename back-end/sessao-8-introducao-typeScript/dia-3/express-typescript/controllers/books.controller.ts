import { Request, Response } from 'express';
import StatusCodes from '../StatusCode';
import BookService from '../services/books.service';
import IBook from '../interfaces/book.interface';

export default class BookController {
    private service: BookService;
    constructor() {
        this.service = new BookService()
    }
    
    public getAll = async (req: Request, res: Response) => {
        const books = await this.service.getAll();
        res.status(StatusCodes.OK).json(books);
    }

    public create = async (req: Request, res: Response) => {
        const book = await this.service.create(req.body);
        res.status(StatusCodes.OK).json(book);
    }

    public getById = async (req: Request, res: Response) => {
        const { id } = req.params;
        const book = await this.service.getById(parseInt(id))
        res.status(StatusCodes.OK).json(book);
    }
}