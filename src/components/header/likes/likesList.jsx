import React from 'react'
import {Link} from 'react-router-dom'
import './likes.css'


const LikesList =()=>{

    return <div className="absolute right-0 top-20 bg-white rounded-md p-2 max-h-96 overflow-y-auto likescontainer z-50">
        <Link className="bg-white">
            <div className="p-3 flex justify-between border-b-gray-100 border-b-2">
                <div className="w-20 h-20 overflow-hidden rounded-full mt-3 flex justify-center">
                    <img src="http://forkify-api.herokuapp.com/images/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg" alt="" className="w-full"/>
                </div>
                <div className="mt-3 ml-4 text-textblue">
                    <h1 className="recipe_name text-xl sm:text-2xl">BBQ chicken.....................</h1>
                    <p className="mt-2">BBQ recipes</p>
                </div>
            </div>
        </Link>
        
    </div>
}

export {LikesList}