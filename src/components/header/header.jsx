import React from 'react'
import './header.css'
import {Searchrecipe} from './searchrecipe/searchrecipe';
import logo from '../SVGs/Grilla-Icon.svg'
import {Likes} from './likes/likes'

const Header = ({search, changed,inputValue, keyPress, showLikes, clicked, likedItems, setLikedItems, setFilled})=>{
    


    return <div className="header flex my-2 mx-auto justify-between xsm:justify-start smm:space-x-1 relative">
        <div className="flex p-4 mdd:px-2 xsm:pr-0.5 ml-4 xxsm:ml-1 xxsm:px-1 items-center">
            <div className="rounded-full w-20 h-20 md:w-16 md:h-16 xsm:w-12 xsm:h-12 ">
                <img src={logo} alt="Grilla Icon" className="icon w-20 h-20 md:w-16 md:h-16 xsm:w-12 xsm:h-12 "/> 
            </div>
            <h1 className="Grilla ml-3 mdd:ml-2 mt-5 xsm:mt-3 text-3xl md:text-2xl xsm:text-xl xxsm:mt-1">Grilla</h1>
        </div>
        <Searchrecipe 
            Search={search}
            changed={changed}
            inputValue={inputValue}
            keyPress={keyPress}
        />
        <Likes clicked={clicked} likedItems={likedItems} showLikes={showLikes} setLikedItems={setLikedItems} setFilled={setFilled}/>
        {/* {showLikes ? <LikesList  likedItems={likedItems}/> : null} */}
    </div>
}



export { Header }