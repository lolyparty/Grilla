import React from 'react'
import { Recipelist } from '../recipe-list/recipe-list'
import { Header } from '../header/header'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ScrollToTop from '../scrollToTop'
import {RecipeDetails} from '../recipe-details/recipe-details'


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

    return <Router>

    <div className="bg-grayish rounded-2xl shadow p-8 min-h-screen mdd:p-4 xsm:px-1.5">
        <Header 
            search={getSearch}
            changed={changed}
            inputValue={input}
        />
        <hr className="mx-auto my-6"/>
                
        <ScrollToTop />
      <Switch>
        <Route exact path='/'>
            <Recipelist search={search} />
        </Route>
        <Route  path='/:id' component={RecipeDetails} />
      </Switch>
    </div>
    </Router>
}

export { Homepage }