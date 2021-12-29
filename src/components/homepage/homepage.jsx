import React from 'react'
import { Recipelist } from '../recipe-list/recipe-list'
import { Header } from '../header/header'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ScrollToTop from '../scrollToTop'
import {RecipeDetails} from '../recipe-details/recipe-details'


const Homepage = ()=>{

    const [search, setSearch] = React.useState('')

    const [input, setInput] = React.useState('')

    const [showLikes, setShowLikes] = React.useState(false)

    const [likedItems, setLikedItems] = React.useState([])

    const clicked = (e)=>{
        e.preventDefault()
        // console.log(likedItems)
        setShowLikes(!showLikes)
    }

    const closeLikes=()=>{
        setShowLikes(false)
    }

    const pressEnter = (e)=>{
        if(e.key === 'Enter'){
                setSearch(input)
                setInput('')
                // console.log(search, input)
            }
    }

    

    const getSearch = (e)=>{
        e.preventDefault()
        setSearch(input)
        setInput('')
        setShowLikes(false)
        // console.log(search, input)
    }

    const changed =(e)=>{
        const {value} = e.target
        setInput(value)
    }

    return <Router>

    <div className="bg-grayish rounded-2xl shadow p-8 pt-4 max-w-120 min-h-screen mdd:p-4 xsm:px-1.5 mx-auto">
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
      <Switch>
        <Route exact path='/'>
            <Recipelist closeLikes={closeLikes} search={search} />
        </Route>
        <Route  path='/:id'>
            <RecipeDetails likedItems={likedItems} setLikedItems={setLikedItems}/>
        </Route>
      </Switch>
    </div>
    </Router>
}

export { Homepage }