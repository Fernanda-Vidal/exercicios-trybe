import express, { NextFunction, Request, Response } from 'express';
import statusCodes from './statusCode';
import 'express-async-errors';

const app = express();

app.use(express.json());

const PORT = 8000;

app.get('/', (req: Request, res: Response) => {
    res.status(statusCodes.OK).send('Express + TypeScript')
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    const { name, message, details } = err as any;
    console.log(`name: ${name}`);

    switch (name) {
        case 'ValidationError':
            res.status(400).json({ message: details[0].message });
        case 'NotFoundError':
            res.status(404).json({ message });
        case 'conflictError':
            res.status(409).json({ message });
            break;
        default:
            console.log(err);
            res.sendStatus(500);
    }

    next();
})

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));