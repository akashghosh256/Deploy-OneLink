import express from "express";
import router from "./routes/routes.js";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./database/db.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(cors());
app.use(morgan("dev"));



// configure env
dotenv.config();

// database config
connectDB();

//esmodule fix for deplyment
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const PORT = 8000;

app.use("/", router);
app.use(express.static(path.join(__dirname, "../client/build"))); //for offline diable this


//web  hosting  route = for offline disable this
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

app.listen(PORT, () => console.log(`server is running on PORT: ${PORT}`));
