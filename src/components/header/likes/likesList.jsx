import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import './likes.css'


const LikesList =({likedItems})=>{


    return <div className="absolute right-0 top-20 bg-white rounded-md p-2 max-h-96 overflow-y-auto likescontainer z-50">
        {likedItems.length > 0 ? likedItems.map((item)=><Link to={`/${item.id}`} className="bg-white"> 
            <div className="p-3 flex justify-between border-b-gray-100 border-b-2 last:border-b-0">
                <div className="w-20 h-20 overflow-hidden rounded-full mt-3 flex justify-center">
                    <img src={item.image} alt="" className="w-full"/>
                </div>
                <div className="mt-3 ml-4 text-textblue">
                    <h1 className="recipe_name text-xl sm:text-2xl">{`${item.title.slice(0,18)} ...`}</h1>
                    <p className="mt-2">{item.publisher}</p>
                </div>
            </div>
         </Link>) : 
        <div className="flex justify-center items-center">Opps! Favorite recipes empty, like your favorite recipes for them to appear here</div>}
    </div>
}

export {LikesList}