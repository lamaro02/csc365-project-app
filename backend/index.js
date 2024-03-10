import express from "express";
import mysql from "mysql";

const app = express()

// connect to database
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "csc_365_23_24",
    database: "project"
})

// display following message onto localhost:8800
app.get("/", (req,res)=>{
    res.json("hello this is the backend")
})

// execute and display the following query
app.get("/address", (req,res)=>{
    const q = "SELECT * FROM ADDRESS"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.listen(8800, ()=>{
    console.log("Connected to backend!")
})