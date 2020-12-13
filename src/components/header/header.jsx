import React from 'react'
import './header.css'
import {Searchrecipe} from './searchrecipe/searchrecipe';
import logo from './dish-fork-and-knife.svg'

const Header = ()=>{

    return <div className="header">
        <div className="header_name">
            <div className="grilla_icon">
                <img src={logo} alt="Grilla Icon" className="icon"/> 
            </div>
            <h1>Grilla</h1>
        </div>
        <Searchrecipe/>
    </div>
}

export { Header }