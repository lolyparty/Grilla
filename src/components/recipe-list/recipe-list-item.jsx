import React from 'react'
import './recipe-list.css'
import {Link} from 'react-router-dom'

const RecipeListItem = ({id,image_url,title,publisher,closeLikes})=>{
    return <Link to={`/${id}`} onClick={closeLikes} className="my-3 mx-2 shadow-lg bg-white w-96 p-3 rounded-2xl transition duration-1000 transform hover:scale-101 xxsm:p-3 xxsm:max-w-sm">
                    <div className="p-1 flex xxsm:p-0">
                        <div className="w-20 h-20 xxsm:w-15 xxsm:h-15 overflow-hidden rounded-full mt-3 flex justify-center">
                            <img src={image_url} alt={title} className="w-full"/>
                        </div>
                        <div className="mt-3 ml-3 text-textblue">
                            <h1 className="recipe_name text-xl sm:text-2xl xxsm:text-lg">{title.slice(0,20)}...</h1>
                            <p className="mt-2 inline-block">{publisher}</p>
                        </div>
                    </div>
                </Link> 
}


export {RecipeListItem}