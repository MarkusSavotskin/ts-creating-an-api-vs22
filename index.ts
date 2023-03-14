import express, { Express, Request, Response } from "express";
import stringController from "./controllers/strings";
import productController from "./controllers/products";

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use('/', stringController);
app.use('/', productController);

app.listen(3000,() => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});