const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name: {
        type: String,
        required: [true, "This is a required field"]
    },
    username: {
        type: String,
        required: [true, "This is a required field"]
    },
    email: {
        type: String,
        required: [true, "This is a required field"]
    },
    password: {
        type: String,
        required: [true, "This is a required field"]
    },
    dob: {
        type: Date,
        required: [true, "This is a required field"],
    },
    upiId: {
        type: String,
        required: [true, "This is a required field"]
    },
    creditCard: {
        type: String,
        required: [true, "This is a required field"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports=mongoose.model('User', userSchema);