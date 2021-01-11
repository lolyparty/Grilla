import React from 'react'
import './recipe-list.css'
import {RecipeListItem} from './recipe-list-item'
import axios from 'axios'

const Recipelist = ({search})=>{

    const [results, searchResults] = React.useState([])

    const [isLoading, setLoading] = React.useState(false)


    React.useEffect(()=>{
        const getRecipe = async () =>{
            try{
                if(search !== ''){
                    searchResults([])
                    setLoading(true)
                    const data = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}&key=${process.env.REACT_APP_API_KEY}`)
                    searchResults(data.data.data.recipes)
                    setLoading(false)
                }
                
            } catch{
                console.log("error getting lists")
            }
        }

        getRecipe()
    },[search])

    return <div className="p-1 flex flex-wrap justify-evenly">
            {isLoading && <div className="w-16 h-16 rounded-full border-transparent border-4 loading my-2 mx-auto animate-spin"></div>}
            {results.map(recipe=><RecipeListItem key={recipe.id} {...recipe}/>)}
        </div>
}

export {Recipelist}

// 