const express=require("express")
const app=express()
var cors = require('cors')
const path=require('path')
const port=8000
app.use(express.json())
app.use(cors())
const fetch = require('node-fetch');



app.get('/',(req,res)=>{
    res.send("App is live")
})

app.use(express.static(path.join(__dirname, 'public')));
// Serves static files for all routes
app.get('*', async (req, res) => {
    try {
      const response = await fetch('https://raw.githubusercontent.com/2001sahil/Deploy-amazon-clone/new-branch/index.html');
      const html = await response.text();
      res.send(html);
    } catch (error) {
      res.status(500).send('Error retrieving the HTML file.');
    }
  });

app.use("/Account",require("./LoginANdCreateaccount"))
app.use("/Cart",require("./Cart"))
app.listen(port,()=>{
    console.log("app started")
})
const Mongo=require('./Mongo');
Mongo.Mongo()