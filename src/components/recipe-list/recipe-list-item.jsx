import React from 'react'
import './recipe-list.css'
import {Link} from 'react-router-dom'

const RecipeListItem = ({id,image_url,title,publisher})=>{
    return <Link to={`/${id}`} className="recipe_url">
                    <div className="recipe_item">
                        <div className="img_div">
                            <img src={image_url} alt={title}/>
                        </div>
                        <div className="recipe_details">
                            <h1 className="recipe_name">{title.slice(0,15)}...</h1>
                            <p className="author">{publisher}</p>
                        </div>
                    </div>
                </Link>
}

export {RecipeListItem}