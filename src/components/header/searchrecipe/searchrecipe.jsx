import React from 'react'
import './searchrecipe.css'

const Searchrecipe = ({changed, Search, inputValue}) =>{
    return <div className="search">
        <input type="text" onChange={changed} placeholder="Search Recipe" name="Search recipe" className="search_input" value={inputValue}/>
        <button onClick={Search} className="btn">Search</button> 
    </div>
}

export {Searchrecipe}