import express from "express";
import morgan from "morgan";
import helmet from "helmet";

const app = express()

app.use(express.json())
app.use(cors())
app.use(helmet()) //security middleware
app.use(morgan("dev"))

app.get("/test", (req, res) => {
    console.log(res.getHeaders())
    res.send("Hello from the backend")
})

app.listen(3000,() => {
    console.log("server started")
})