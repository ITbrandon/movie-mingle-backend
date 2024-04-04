import express from 'express';
// import mongoose from 'mongoose';
import cors from 'cors';
// import postRoute from './models/post.model.js';

const app = express();
app.get("/", (req, res) => res.send("Express on Vercel"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(
  cors({
    origin: "",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

// app.use('/api/posts', postRoute)

// mongoose
//   .connect("mongodb+srv://brandoniticka:5RDGdtFvxh3NQH4e@mingle-posts.pounial.mongodb.net/mingle-posts?retryWrites=true&w=majority&appName=mingle-posts")
//   .then(() => {
//     console.log("Connected!");
//      app.listen(3000, () => {
//        console.log("Server Listening on Port 3000");
//      });
//   })
//   .catch(() => {
//     console.log("Failed to Connect")
//   })