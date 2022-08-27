import express, { Request, Response, NextFunction } from "express";
import postController from "./controllers/PostController";
const router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send("<h1>This is backend of archive<h1>");
});

router.get('/getpost/:userID', postController.getPost);

export default router;