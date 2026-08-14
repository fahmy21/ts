import{GenderEnum,ProviderEnum,RoleEnum}from "../enums/user.enums"


export interface Iuser{
userName:string,    
firstName:string,
lastName:string,
email:string,
phone:string,
password:string,
confirmEmail:boolean,
gender?:GenderEnum,
provider?:ProviderEnum,
role?:RoleEnum
}



