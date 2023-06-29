const mongoose=require("mongoose")

const reciptSchema=new mongoose.Schema({
    nameOfUser:{
        type: String,
        required: [true, "This is a required field"]
    },
    nameOfClient:{
        type: String,
        required: [true, "This is a required field"]
    },
    dueAmount:{
        type: Number,
        required: [true, "This is a required field"]
    },
    paidAmount:{
        type: Number,
        required: [true, "This is a required field"]
    },
    dueAmount:{
        type: Number,
        default: null
    },
    comments:{
        type: String,
        required: [true, "This is a required field"]
    },
    dateOfPayment:{
        type: Date,
        default: Date.now()
    },

})

module.exports=mongoose.model('Recipt', reciptSchema);
