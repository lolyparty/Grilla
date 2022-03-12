import React from 'react'
import './header.css'
import {Searchrecipe} from './searchrecipe/searchrecipe';
import logo from '../SVGs/Grilla-Icon.svg'
import {Likes} from './likes/likes'

const Header = ({search, changed,inputValue, keyPress, showLikes, clicked, likedItems, setLikedItems, setFilled})=>{
    


    return <div className="header flex flex-wrap my-2 justify-evenly xsm:justify-around mx-auto relative xxsm:my-0 xsm:max-w-lg ">
            <div className="flex p-4 mdd:px-2  lg:ml-0 lg:px-2 mdd:pl-0 xsm:pr-0.5 xsm:ml-0 xxsm:ml-1 xxsm:px-0 items-center xxsm:w-6/12">
                <div className="rounded-full flex items-center justify-center w-20 h-20 lg:w-16 lg:h-16 mdd:w-14 mdd:h-14 md:w-16 md:h-16 xsm:w-12 xsm:h-12">
                    <img src={logo} alt="Grilla Icon" className="icon w-20 h-20"/> 
                </div>
                <h1 className="Grilla ml-3  lg:ml-2 lg:mt-1 mdd:ml-2 mt-3 mdd:mt-2 text-3xl md:text-2xl xsm:text-xl xsm:mt-2">Grilla</h1>
            </div>
            <Searchrecipe 
                Search={search}
                changed={changed}
                inputValue={inputValue}
                keyPress={keyPress}
            />
            <Likes clicked={clicked} likedItems={likedItems} showLikes={showLikes} setLikedItems={setLikedItems} setFilled={setFilled}/>
    </div>
}



export { Header }