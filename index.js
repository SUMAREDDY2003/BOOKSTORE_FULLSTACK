const express=require("express");
const mongoose=require("mongoose");
const router = require("./routes/book-routes");
const router1= require("./routes/user-routes");
const app= express();
const cors= require('cors');


// app.use('/',(req,res,next) => {
//     res.send("Middleware");
// })


app.use(express.json()); // bcoz server dont know which type of data we are sending
app.use(cors());
app.use("/books",router);
app.use('/api', router1);   


mongoose.connect("mongodb+srv://admin:admin09@cluster0.pzssgqk.mongodb.net/bookstores?retryWrites=true&w=majority"
)
.then(()=> console.log("Connected to database"))
.then(()=> {
    app.listen(9000);
})
.catch((err)=>console.log(err));