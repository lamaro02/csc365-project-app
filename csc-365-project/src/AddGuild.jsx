import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddGuild = () => {
    const [guild, setGuild] = useState({
        guild_id: null,
        guild_name: "",
        discount_perc: null,
        guild_desc: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setGuild(prev=>({...prev, [e.target.name]: e.target.value}));
    };

    const handleClick = async (e) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:8800/guilds", guild)
            navigate('/guilds')
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div className="form">
            <h1>Add New Customer</h1>
            <input type="number" placeholder="Guild ID" onChange={handleChange} name="guild_id"/>
            <input type="text" placeholder="Guild Name" onChange={handleChange} name="guild_name"/>
            <input type="number" placeholder="Guild Discount Percentage" onChange={handleChange} name="discount_perc"/>
            <input type="text" placeholder="Guild Description" onChange={handleChange} name="guild_desc"/>
            <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default AddGuild