import { Response } from "express"

export const successResponse = ({res,message="success",status=200,data}:{
    res:Response,
    status?:number,
    message?:string,
    data?:any

})=>{
return res.status(status).json({
    message,
    data
})

}