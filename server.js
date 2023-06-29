require("dotenv").config()
const express= require("express")
const bodyParser=require("body-parser")
const cookieParser=require("cookie-parser")
const routes=require("./routes")
const connectDB=require("./db/connect")
const {User,Client,Payment,Recipt} = require("./models")
// const User=require("./models/user")
// const Client=require("./models/client")
// const Payment=require("./models/payment")
// const Recipt=require("./models/recipt")
const app= express()

const PORT= process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
console.log(process.env.URL);
const start= async () => {
    try{
        await connectDB(process.env.URL)
        await User.create()
        await Client.create()
        await Payment.create()
        await Recipt.create()

        app.listen(PORT, () => console.log('Server Started!!!!'))
        console.log("connected ");
    }
    catch (error) {
        console.log("error occured ", error);
    }

}
app.get('/', (req, res) => {res.send('Home Page!!!')})
// app.use("/api", routes)
start()