// const mongose=require("mongoose")
import mongose from 'mongoose'

const data=new mongose.Schema({
    user:{
        type:mongose.Schema.Types.ObjectId,
        ref:"User",
    },
    Product:{
        type:String,
        require:true
    }
    // Name:{
    //     type:String
    // },
    // PhoneNo:{
    //     type:Number,
    //     require:true
    // },
    // password:{
    //     type:String,
    //     require:true
    // },
    // email:{
    //     type:String,
    //     require:true
    // }
})
const User = mongose.model("Notes", data);

// module.exports=User
export default User