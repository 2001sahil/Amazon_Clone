// const mongose=require("mongoose")
import mongose from 'mongoose'
const data=new mongose.Schema({
    Name:{
        type:String,
        require:true
    },
    PhoneNo:{
        type:Number,
        require:true
    },
    password:{
        type:String,
        require:true

    },
    email:{
        type:String,
        require:true
    }
})
const User = mongose.model("User", data);

// module.exports=User
export default User