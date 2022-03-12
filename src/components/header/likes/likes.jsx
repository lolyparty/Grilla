import React from 'react'
import { LikesList } from './likesList';

const Likes = ({clicked, likedItems, showLikes, setLikedItems, setFilled}) =>{
    return <div className=" pt-10 mdd:mr-0 lg:pt-8 mdd:pt-9 xsm:pt-8 xsm:mr-0 xxsm:pt-6 xxsm:w-5/12 focus:outline-none"> <button className="border-0 flex justify-around text-xl likes focus:outline-none focus:shadow-outline focus:border-blue xsm:justify-center" onClick={clicked}>
        <span className="xxsm:invisible likes_names 2xl:mr-3 lg:mr-1 mdd:text-lg mdd:mr-2">Favorite Recipes</span>
        <div className="">
            <svg viewBox="-1 7 35 25" width="25" height="30" className="mdd:mt-0 xxsm:mt-1 2xl:mt-1 xxsm:mr-2">
                        <path stroke="#ff0000" stroke-width="2" fill='#F3F3F3'  d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
                            c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/> 
            </svg>
        </div>
    </button>
    {showLikes ? <LikesList  likedItems={likedItems} setLikedItems={setLikedItems} setFilled={setFilled}/> : null}
    </div>
}

export {Likes}