import React from 'react'
import './header.css'
import {Searchrecipe} from './searchrecipe/searchrecipe';
import logo from './Grilla-Icon.svg'
import {Likes} from './likes/likes'
import { LikesList } from './likes/likesList';

const Header = ({search, changed,inputValue, keyPress, showLikes, clicked, likedItems, setLikedItems})=>{
    


    return <div className="header flex my-2 mx-auto justify-between xsm:justify-start smm:space-x-1 relative">
        <div className="flex p-4 mdd:px-2 xsm:pr-0.5 ml-4">
            <div className="rounded-full">
                <img src={logo} alt="Grilla Icon" className="icon w-20 h-20 md:w-16 md:h-16 xsm:w-12 xsm:h-12"/> 
            </div>
            <h1 className="Grilla ml-3 mdd:ml-2 mt-5 xsm:mt-3 text-3xl md:text-2xl xsm:text-xl xxsm:text-lg">Grilla</h1>
        </div>
        {/* {console.log(likedItems)} */}
        <Searchrecipe 
            Search={search}
            changed={changed}
            inputValue={inputValue}
            keyPress={keyPress}
        />
        <Likes clicked={clicked} likedItems={likedItems} showLikes={showLikes} setLikedItems={setLikedItems}/>
        {/* {showLikes ? <LikesList  likedItems={likedItems}/> : null} */}
    </div>
}



export { Header }