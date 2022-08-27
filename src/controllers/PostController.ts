import { Request, Response, NextFunction } from "express";

const getPost = async (req: Request, res: Response, next: NextFunction) => {
    // make api call to social media

};

const postController = {
    getPost,
}

export default postController;