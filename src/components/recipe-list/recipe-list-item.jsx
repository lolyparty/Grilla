import React from 'react'
import './recipe-list.css'

const RecipeListItem = ({id,image_url,title,publisher})=>{
    return <a href={id} className="recipe_url">
                    <div className="recipe_item">
                        <div className="img_div">
                            <img src={image_url} alt={title}/>
                        </div>
                        <div className="recipe_details">
                            <h1 className="recipe_name">{title.slice(0,12)}...</h1>
                            <p className="author">{publisher}</p>
                        </div>
                    </div>
                </a>
}

export {RecipeListItem}