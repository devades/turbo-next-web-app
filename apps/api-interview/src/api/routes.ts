import express, {Request, Response, Router} from "express";

const router:Router = express.Router();

router.get("/", (req: Request, res: Response) => {
    // return res.send({ message: `helloa` });
    return res.json({ 
        message: `Hi this is a public api route example, no authorization needed` 
    });
});

export default router;