const express = require("express");
require("dotenv").config();
const cors=require('cors')
const app = express();
const index=require('./routes/index')
const users=require('./routes/users')

app.use(cors());
app.use(express.json());

app.use("/", index);
app.use("/", users);
// app.get('/',(req,res)=>{
//     res.send('hello World')
// })


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Listening to the port ${PORT}`));