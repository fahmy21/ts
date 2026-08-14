import mongoose from "mongoose";
import { Iuser } from "../../commen/interFaces/user.interFaes";
import { GenderEnum, ProviderEnum, RoleEnum } from "../../commen/enums/user.enums"


const userSchema=new mongoose.Schema<Iuser>({

firstName:String,
lastName:String,
email:{
    type:String,
    unique:true
},
confirmEmail: Boolean,
phone:String,
password:String,
gender:{
    type:Number,
     default:GenderEnum.female
},
provider:{
      type:Number,
    default:ProviderEnum.System
},
role:{
    type:Number,
    default: RoleEnum.user
},

},{
    timestamps:true
})

userSchema.virtual("userName").set(function(value){
    let [firstName ,lastName]=value.split(" ")
    this.firstName = firstName
    this.lastName = lastName
}).get(function(){
    return `${this.firstName}${this.lastName}`
})

const userModel = mongoose.model<Iuser>("user",userSchema)

export default userModel