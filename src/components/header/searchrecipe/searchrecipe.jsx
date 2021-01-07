import React from 'react'
import './searchrecipe.css'
import {Link} from 'react-router-dom'

const Searchrecipe = ({changed, Search, inputValue}) =>{
    return <div className="search">
        <input type="text" onChange={changed} placeholder="Search Recipe" name="Search recipe" className="search_input" value={inputValue}/>
        <button onClick={Search} className="btn"><Link to='/'>Search</Link></button> 
    </div>
}

export {Searchrecipe}