const  express = require('express');
const app = express();

require('dotenv').config();
 app.get("/",(req,res)=>{
    const date = new Date();
    const hours = date.getHours();
    console.log(hours);
    if (hours < 8 && hours > 18 ) {
        res.send("closed !");
    }
    else {
        res.send("welcome");
    }
 })

app.listen(process.env.PORT,(err)=> err ? console.log(err) : console.log("server is running on port"+process.env.PORT) 
);