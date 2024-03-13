import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Guild = () => {
    const [guilds, setGuilds] = useState([])
    const [sorted, setSorted] = useState({sorted: "name", reversed: false})

    const sortByName = () => {
        setSorted({sorted: "name", reversed: !sorted.reversed});
        const guildsCopy = [...guilds];
        guildsCopy.sort((guildA, guildB) => {
            if(sorted.reversed) {
                return guildA.guild_name.localeCompare(guildB.guild_name);
            }
            return guildB.guild_name.localeCompare(guildA.guild_name);
        });
        setGuilds(guildsCopy);
    };

    const sortById = () => {
        setSorted({sorted: "name", reversed: !sorted.reversed});
        const guildsCopy = [...guilds];
        guildsCopy.sort((guildA, guildB) => {
            if(sorted.reversed) {
                return guildA.guild_id - guildB.guild_id;
            }
            return guildB.guild_id - guildA.guild_id;
        });
        setGuilds(guildsCopy);
    };

    useEffect(()=>{
        const fetchAllGuilds = async ()=>{
            try{
                const res = await axios.get("http://localhost:8800/guilds")
                setGuilds(res.data);
            }catch(err) {
                console.log(err);
            }
        }
        fetchAllGuilds()
    }, [])
    return (
        <div>
            <h1>Guilds</h1>
            <button className='button'><Link to='/addGuild'>Add New Guild</Link></button>
            <div className="sort" onClick={sortByName}>Sort By Name</div>
            <div className="sort" onClick={sortById}>Sort By ID</div>
            <div className='guilds'>
                {guilds.map(guild=>(    
                    <div className='guild'>
                        <h2>{guild.guild_name}</h2>
                        <p>Guild ID: {guild.guild_id}</p>
                        <p>Guild Discount Percentage: {guild.discount_perc}</p>
                        <p>Description: {guild.guild_desc}</p>
                    </div>   
                ))}
            </div>
        </div>
    )
}

export default Guild