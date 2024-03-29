import React, {useEffect} from 'react'
import { Recipelist } from '../recipe-list/recipe-list'
import { Header } from '../header/header'
import {Route, Switch, useHistory} from 'react-router-dom'
import ScrollToTop from '../scrollToTop'
import {RecipeDetails} from '../recipe-details/recipe-details'


const Homepage = ()=>{

    const [search, setSearch] = React.useState('')

    const [input, setInput] = React.useState('')

    const [showLikes, setShowLikes] = React.useState(false)

    const initialLikes = JSON.parse(localStorage.getItem('likes')) ? JSON.parse(localStorage.getItem('likes')) : [];

    const [likedItems, setLikedItems] = React.useState(initialLikes)

    let history = useHistory()

    const clicked = (e)=>{
        e.preventDefault()
        setShowLikes(!showLikes)
    }

    useEffect (()=>{
        const updateStorage =()=>{
            localStorage.setItem('likes',JSON.stringify(likedItems))
        }
        updateStorage()

    },[likedItems])

    const closeLikes=()=>{
        setShowLikes(false)
    }

    const pressEnter = (e)=>{
        if(e.key === 'Enter'){
                setSearch(input)
                history.push('/')                
                setInput('')
            }
    }


    const getSearch = (e)=>{
        e.preventDefault()
        setSearch(input)
        history.push('/')
        setInput('')
        setShowLikes(false)
    }

    const changed =(e)=>{
        const {value} = e.target
        setInput(value)
    }

    return <div className="bg-grayish rounded-2xl shadow p-8 pt-4 max-w-120 min-h-screen mdd:p-4 xsm:px-1.5 mx-auto">
            <Header 
            search={getSearch}
            changed={changed}
            inputValue={input}
            keyPress={pressEnter}
            clicked={clicked}
            showLikes={showLikes}
            likedItems={likedItems}
            setLikedItems={setLikedItems}
        />
        <hr className="mx-auto mt-3 mb-6"/>
                
        <ScrollToTop />
        <div className="">
            
        </div>
      <Switch>
        <Route exact path='/'>
            <Recipelist closeLikes={closeLikes} search={search} setShowLikes={setShowLikes}/>
        </Route>
        <Route  path='/:id'>
            <RecipeDetails likedItems={likedItems} setLikedItems={setLikedItems} setShowLikes={setShowLikes}/>
        </Route>
      </Switch>
    </div>
}

export { Homepage }