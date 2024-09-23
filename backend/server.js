import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();
const app = express();

// app.get("/", (req, res)=> {
//   res.send("hello world")
// })

app.use(express.json());
app.use("/api/products", productRoutes)

app.listen(5000, () => {
  connectDB();
  console.log("server started at port http://localhost:5000/");
});
