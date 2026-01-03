import express from 'express';
import cors from 'cors';
import apiRouter from './routers/apiRouter.js';
import { connectToDatabase } from './config/DatabaseConfig.js';
import {SERVER_PORT} from './config/ServerConfig.js';

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.get('/ping',(req,res)=>{
  res.send("hello")
})


app.listen(SERVER_PORT, () => {
  console.log(`Server is running on http://localhost:${SERVER_PORT}`);
  connectToDatabase();
});