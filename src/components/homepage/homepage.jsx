import React from 'react'
import './homepage.css'
import { Recipelist } from '../recipe-list/recipe-list'
import { Header } from '../header/header'

const Homepage = ()=>{

    const [search, setSearch] = React.useState('')

    const [input, setInput] = React.useState('')

    const getSearch = (e)=>{
        e.preventDefault()
        setSearch(input)
        setInput('')
    }

    const changed =(e)=>{
        const {value} = e.target
        setInput(value)
    }

    return <div className="home">
        <Header 
            search={getSearch}
            changed={changed}
            inputValue={input}
        />
        <hr/>
        <Recipelist search={search} />
    </div>
}

export { Homepage }