import express from "express";
import {json} from"express";
import { adminRoute } from "./Routes/adminRotes.js";
const app=express()
app.use(json())
app.use('/',adminRoute)
const port=8000;
app.listen(port,()=>{
    console.log(`port listen to ${port}`)
})