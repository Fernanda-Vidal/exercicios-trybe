import connection from "../models/connection";
import BookModel from "../models/book.model";
import IBook from "../interfaces/book.interface";

export default class BookService {
    public model: BookModel;

    constructor() {
        this.model = new BookModel(connection);
    }

    public async getAll(): Promise<IBook[]> {
        const books = await this.model.getAll();
        return books;
    }

    public async create(book: IBook): Promise<IBook> {
        const result = await this.model.create(book);
        return result;
    }

    public async getById(id: number): Promise<IBook> {
        const result = await this.model.getById(id);
        return result;
    }
}