import express from "express";
import cors from 'cors'
import { adminRouter } from "./routes/AdminRoute.js";


const app = express()
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

app.use(express.json()) //data passing from frontend ..to convert it into
app.use('/auth', adminRouter)
app.use(express.static('Public'))

app.listen(3000, () => {
    console.log("Server is running")
})