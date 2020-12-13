import React from 'react'
import './homepage.css'
import { Recipelist } from '../recipe-list/recipe-list'
import { Header } from '../header/header'

const Homepage = ()=>{


    return <div className="home">
        <Header />
        <Recipelist />
    </div>
}

export { Homepage }