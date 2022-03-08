import React from 'react'
import { LikesList } from './likesList';

const Likes = ({clicked, likedItems, showLikes, setLikedItems, setFilled}) =>{
    return <div className=" pt-10 mr-4 xsm:pt-10.5 xxsm:pt-8 xxsm:w-5/12"> <button className="border-0 flex justify-around text-xl likes focus:outline-none focus:shadow-outline focus:border-blue" onClick={clicked}>
        <span className="xsm:invisible">Favourite Recipes</span>
        <div className="w-12 h-10">
            <svg viewBox="0 0 60 30" className="xxsm:mt-1">
                        <path stroke="#ff0000" stroke-width="2" fill='#F3F3F3'  d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
                            c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/> 
            </svg>
        </div>
    </button>
    {showLikes ? <LikesList  likedItems={likedItems} setLikedItems={setLikedItems} setFilled={setFilled}/> : null}
    </div>
} 

export {Likes}