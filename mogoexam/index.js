import express,{json} from 'express';
import { adminrouter } from './route.js/adminroute.js';

 
const app=express();


app.use(json())

 app.use('/',adminrouter)


const port=8000;



app.listen(port,()=>{
    
console.log(`server is listening to ${port}`)
  
})