import mongoose, { MongooseError } from 'mongoose'

const orderItemSchema = new mongoos.schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity: {
        type: Number,
        required:true
    }
})


const orderSchema= new mongoose.Schema({
    orderPrice: {
        type:Number,
        reqiured:true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderItems:{
        type:[orderItemSchema]
    },
    address:{
        type: String,
        required:true
    },
    status:{
        type:String,
        enum: ["PENDING","CANCELLED","DELIVERED"],   //choices
        default: "PENDING"
    }
},{timestamps:true})

export const Order = mongoose.model("Order",orderSchema)