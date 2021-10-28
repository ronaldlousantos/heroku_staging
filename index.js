const dotenv =require('dotenv')
dotenv.config()
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())

const port = process.env.PORT || 3000;

let result = {'current':"current value of global result object"};


app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.get('/',   (req,res)=>{res.send('Hello World')});
app.post('/',   (req, res)=>{ 
    result = req.body;
    res.send(result)});
app.get('/result',   (req, res)=>{ res.send(result)});

app.listen(port , () =>{
    console.log(`Server running on port ${port}`)
})