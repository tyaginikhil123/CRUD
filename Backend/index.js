const express=require("express");
const dotenv=require("dotenv");
const { connectDatabase } = require("./Config/database");
const app=express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json());

console.log(process.env.PORT)
// connecct data base
connectDatabase();

// All Routes
app.use('/api/v1',userRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on -->> ${process.env.PORT}`)
});
