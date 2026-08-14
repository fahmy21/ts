import express  from 'express';
import { Express } from "express";
import authRouter from './auth/auth.controller'
import cors from 'cors'
import { rateLimit } from 'express-rate-limit'
import helmet from 'helmet';
import { env } from './config/env.service';
import { databaseConnect } from './database/connection';
import{globalErrorHandler}from './middleware/errorHandling'

  export const bootstrap = ()=>{
    const app:Express =express()
    app.use(express.json())
    app.use('/auth',authRouter)
databaseConnect()
app.use(globalErrorHandler) // اى ايرور يحصل ف السيرفر وهنا هيكاتش الايرور

app.use(helmet())
    app.use(cors({
    origin:"http://localhost:3001", //يعني اسمح للموقع ده فقط إنه يتعامل مع السيرفر.
    methods:["GET","POST","PUT"]// يعنى انا اسمح يقدر يستخدم دول فقط
    }))

 const limiter = rateLimit({

    windowMs: 15 * 60 * 1000,
    limit: 100,
})

app.use(limiter)
    const port:number = 3000


app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],//اسمح بتحميل أي حاجة من نفس الموقع فقط.

        scriptSrc: [//دي خاصة بملفات JavaScript فقط.
          "'self'",
          "https://cdn.jsdelivr.net"],

        styleSrc: [//خاصة بملفات CSS.
          "'self'",
          "https://fonts.googleapis.com"],

        imgSrc: [// خاصة بالصور.
          "'self'",
          "https://images.com"//اسمح بالصور القادمة من https://images.com فقط.
        ],

        connectSrc: [//دي خاصة بأي اتصال بيعمله JavaScript.
          "'self'",
          "https://api.myshop.com"],},},})
);


app.listen(env.port, () => {
    console.log(`server is running on port ${env.port}`);
})}

export default bootstrap