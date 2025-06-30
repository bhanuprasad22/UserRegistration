import express from 'express';
import cors from "cors";
// import todoroutes from './routes/todoroutes.js';


const app= express();

app.use(express.json());
app.use(express.urlencoded());

// app.use('/api/v1/todos',todoroutes); 

export default app;
