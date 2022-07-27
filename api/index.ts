const express = require("express");
// import  { Request, Response } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");


import { router } from "./config/router";

const port = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: any, res: any) => res.send("I'm alive!"));

// Route to all of our api routes.
app.use("/api", router);

app.listen(port, () => console.log(`Listening on port ${port}`));
