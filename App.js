const express=require("express")
const app=express()
var cors = require('cors')
const path=require('path')
const port=8000
app.use(express.json())
app.use(cors())
// static files////////////////////
// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/*', function(req,res) {
// 		res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
// app.use(express.static(path.join(__dirname,'./amazon-clone/build')))

// app.get("/", (req,res)=>{
//     res.sendFile(path.join(__dirname,'./amazon-clone/build/index.html'))
// })
app.get('/',(req,res)=>{
    res.send("App is live")
})
// app.get('/favicon.ico', (req, res) => {
//     // Use actual relative path to your .ico file here
//     res.sendFile(path.resolve(__dirname, './amazon-clone/build/favicon.ico'));
//   });


app.use("/Account",require("./LoginANdCreateaccount"))
app.use("/Cart",require("./Cart"))
app.listen(port,()=>{
    console.log("app started")
})
const Mongo=require('./Mongo');
Mongo.Mongo()