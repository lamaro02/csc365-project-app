import express from "express";
import mysql from "mysql";
import cors from 'cors';

const app = express()

// connect to database
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "Fester4321!",
    database: "project"
})

app.use(cors())

// display following message onto localhost:8800
app.get("/", (req,res)=>{
    res.json("hello this is the backend")
})

// return info we want displayed on page: product name, brand, vendor, description, qoh
app.get("/products", (req,res)=>{
    const q = `
    SELECT p.product_name, p.product_price, p.in_stock, b.brand_name
    FROM PRODUCT p
    JOIN BRAND b ON b.brand_id = p.brand_id
    `
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.listen(8800, ()=>{
    console.log("Connected to backend!")
})