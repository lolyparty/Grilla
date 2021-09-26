import React from 'react'
import './header.css'
import {Searchrecipe} from './searchrecipe/searchrecipe';
import logo from './Grilla-Icon.svg'
import {Likes} from './likes/likes'

const Header = ({search, changed,inputValue})=>{

    return <div className="header grid grid-cols-6 gap-4 my-2 mx-auto">
        <div className="header_name">
            <div className="grilla_icon">
                <img src={logo} alt="Grilla Icon" className="icon"/> 
            </div>
            <h1 className="Grilla ml-4 mt-5 text-3xl">Grilla</h1>
        </div>
        <Searchrecipe 
            Search={search}
            changed={changed}
            inputValue={inputValue}
        />
        <Likes />
    </div>
}

export { Header }