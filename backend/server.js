import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000;
console.log(PORT)

app.use(express.json())
app.use(cors())
app.use(helmet()) //security middleware
app.use(morgan("dev"))

app.get("/test", (req, res) => {
    console.log(res.getHeaders())
    res.send("Hello from the backend")
})

app.listen(PORT,() => {
    console.log("server started on port " + PORT)
})