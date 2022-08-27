import { Request, Response, NextFunction } from "express";
import fetch from "node-fetch";

interface fetchedData {
    data: string[],
    paging: string // need to create paging type
}

const getPost = async (req: Request, res: Response, next: NextFunction) => {
    // make api call to social media
    const response: any = await fetch("api call to social media");
    // need to figure out types
    const fetched_data: any = await response.json;
    if (fetched_data.data) {
        const posts: string[] = fetched_data.data;
        // need sorting for data
        res.send({posts});
    }
};

const postController = {
    getPost,
}

export default postController;