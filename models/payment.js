const mongoose=require("mongoose");

const paymentSchema=new mongoose.Schema({
    nameOfUser:{
        type: String,
        required: [true, "This is a required field"]
    },
    nameOfClient:{
        type: String,
        required: [true, "This is a required field"]
    },
    amount:{
        type: Number,
        required: [true, "This is a required field"]
    },
    dueDate:{
        type: Date,
        required: [true, "This is a required field"]
    },
    status:{
        type: String,
        enum: {
            values: ["DONE", "NOT DONE"],
            message: `Wrong choice!`
        }
    },
    comment:{
        type: String,
        required: [true, "This is a required field"]
    },
    createdAt:{
        type: String,
        required: [true, "This is a required field"]
    },
    linkToPay: {
        type: String,
        required: [true, "This is a required field"]
    }

});

module.exports=mongoose.model('Payment', paymentSchema);