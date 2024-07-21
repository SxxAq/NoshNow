import express from "express";
import cors from "cors";
import { connnectDB } from "./config/db.js";
import foodRouter from "./routes/route.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import "dotenv/config";
// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connnectDB();

// api endpoint
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//mongodb+srv://saalim192:aqueel192@cluster0.o3mqflx.mongodb.net/?

/*====================DUMMY===================
const mongoose = require('mongoose');
const uri = "mongodb+srv://saalim192:aqueel192@cluster0.o3mqflx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
run().catch(console.dir);
*/
