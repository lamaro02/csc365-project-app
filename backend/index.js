import express from "express";
import mysql from "mysql";
import cors from 'cors';

const app = express()

// connect to database
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "insert pw here",
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

app.get("/guilds", (req,res)=>{
    const q = `
    SELECT guild_name, guild_id, discount_perc, guild_desc
    FROM GUILD
    `
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

// Tried to get inserting a guild into the database to work but it didn't womp womp
app.post("/guilds", (req,res)=>{
    const q = "INSERT INTO GUILD ('guild_id', 'guild_name', 'discount_perc', 'guild_desc') VALUES (?, ?, ?, ?)"
    const values = [
    req.body.guild_id, 
    req.body.guild_name, 
    req.body.discount_perc,
    req.body.guild_desc
    ];
    db.query(q, [values], (err,data)=>{
        if(err) return res.json(err)
        return res.json("Book has been created successfully")
    })
})

app.listen(8800, ()=>{
    console.log("Connected to backend!")
})