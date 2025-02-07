import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";

import productRoutes from "./routes/productRoutes.js";


dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000;
console.log(PORT)

app.use(express.json())
app.use(cors())
app.use(helmet()) //security middleware
app.use(morgan("dev"))

app.use("/api/products", productRoutes);

app.listen(PORT,() => {
    console.log("server started on port " + PORT)
})