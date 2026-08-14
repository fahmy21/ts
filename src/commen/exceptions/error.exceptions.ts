

interface ApplicationError {
    status:string,
    message:string,
    cause?:unknown
}



export class ApplicationException extends Error implements ApplicationError {

    constructor(message :string , public status :number ,cause?:unknown){
     
       super(message,{cause})
    }
   


}