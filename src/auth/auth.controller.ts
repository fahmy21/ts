import {Router} from "express";
import type { Response, Request} from "express"

const router:Router = Router();

router.get('/login',(req:Request,res:Response)=>{
    res.json('hello from auth controller')
})

export default router







//hfrstsryutdutf