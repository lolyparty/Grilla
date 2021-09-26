import React from 'react'
import {Link} from 'react-router-dom'

const Searchrecipe = ({changed, Search, inputValue}) =>{
    return <div className="relative border-black border-2 col-start-2 col-span-4 flex justify-end">
        <div className="mr-4">
            <input type="text" onChange={changed} placeholder="Search Recipe" name="Search recipe" className="rounded-2xl border-0 my-4 mx-2 px-8 w-80 py-2 hover:shadow-lg" value={inputValue}/>
            <button onClick={Search} className="px-4 cursor-pointer py-2 bg-background1 rounded-2xl"><Link className="no-underline text-white" to='/'>Search</Link></button> 
        </div>
    </div>
}

export {Searchrecipe}