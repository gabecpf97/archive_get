import express, { Application, Request, Response, NextFunction } from "express";
import router from "./route";
import logger from "morgan"
import cors from 'cors';
require('dotenv').config();

const app: Application = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', router);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(500);
    if (err.message)
        return res.send({err: err.message});
    res.send({err});
});

app.listen(5000, () => {
    console.log('server running on port 5000');
});