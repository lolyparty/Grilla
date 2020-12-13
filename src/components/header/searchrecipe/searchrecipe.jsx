import React from 'react'
import './searchrecipe.css'

const Searchrecipe = () =>{
    return <div className="search">
        <input type="text" placeholder="Search Recipe" name="Search recipe" className="search_input"/>
        <button className="btn">Search</button> 
    </div>
}

export {Searchrecipe}