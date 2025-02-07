import express from "express";
import morgan from "morgan";
import helmet from "helmet";

const app = express()
app.use(helmet())

app.get("/test", (req, res) => {
    console.log(res.getHeaders())
    res.send("Hello from the backend")
})

app.listen(3000,() => {
    console.log("server started")
})