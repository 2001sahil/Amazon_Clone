// const express=require("express")

import fetch from 'node-fetch';
import express from 'express'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const app=express()
import cors from 'cors'
import Login from './LoginANdCreateaccount.js'
import path from 'path'
import Cart from './Cart.js'
import Mongo from './Mongo.js'
const port=8000
app.use(express.json())
app.use(cors())


// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// app.use(express.static(path.join(__dirname, 'public')));

// // Serve the index.html file for all routes
// app.get('*', async (req, res) => {
//   try {
//     const response = await fetch('https://raw.githubusercontent.com/2001sahil/Deploy-amazon-clone/<new-branch>/index.html');
//     const html = await response.text();
//     res.send(html);
//   } catch (error) {
//     res.status(500).send('Error retrieving the HTML file.');
//   }
// });


app.get('/',(req,res)=>{
    res.send("App is live")
})

app.use("/Account",Login)
app.use("/Cart",Cart)
app.listen(port,()=>{
    console.log("app started")
})
// const Mongo=require('./Mongo');
Mongo.Mongo()