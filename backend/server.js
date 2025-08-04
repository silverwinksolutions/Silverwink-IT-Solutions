import express from 'express'
import cors from "cors";
import dotenv from 'dotenv'
dotenv.config()
import mongoDB from './configs/mongoDB.js';
import cookieParser from 'cookie-parser';
import userRoute from './routes/userRoute.js'
import employeeRoute from './routes/employeeRoute.js'
const app = express();
const port = 3000
const hostname = 'localhost'

app.use(cors({
    origin: [
        "http://localhost:5173",
        process.env.FRONTEND_URL
    ],
    credentials: true
}));

app.get('/', (req, res) => {
    res.send('This Api is Working');
})
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }))

mongoDB();

app.use('/user', userRoute)
app.use('/employee', employeeRoute)

app.listen(port, () => {
    console.log(`Example app listening on port http://${hostname}:${port}`)
})
