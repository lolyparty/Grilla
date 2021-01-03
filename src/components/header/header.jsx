import React from 'react'
import './header.css'
import {Searchrecipe} from './searchrecipe/searchrecipe';
import logo from './dish-fork-and-knife.svg'

const Header = ({search, changed,inputValue})=>{

    return <div className="header">
        <div className="header_name">
            <div className="grilla_icon">
                <img src={logo} alt="Grilla Icon" className="icon"/> 
            </div>
            <h1 className="Grilla">Grilla</h1>
        </div>
        <Searchrecipe 
            Search={search}
            changed={changed}
            inputValue={inputValue}
        />
    </div>
}

export { Header }