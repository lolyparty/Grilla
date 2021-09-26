import React from 'react'
import './recipe-list.css'
import {Link} from 'react-router-dom'

const RecipeListItem = ({id,image_url,title,publisher})=>{
    return <Link to={`/${id}`} className="my-3 mx-2 shadow-lg bg-white w-96 p-3 rounded-2xl transition duration-1000 transform hover:scale-101">
                    <div className="p-1 flex">
                        <div className="w-20 h-20 overflow-hidden rounded-full mt-3 flex justify-center">
                            <img src={image_url} alt={title} className="w-full"/>
                        </div>
                        <div className="mt-3 ml-3 text-textblue">
                            <h1 className="recipe_name text-xl sm:text-2xl">{title.slice(0,13)}...</h1>
                            <p className="mt-2 inline-block">{publisher}</p>
                        </div>
                    </div>
                </Link>
}

export {RecipeListItem}