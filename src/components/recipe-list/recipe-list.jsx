import React from 'react'
import './recipe-list.css'
import {RecipeListItem} from './recipe-list-item'
import axios from 'axios'

const Recipelist = ({search})=>{

    const [results, searchResults] = React.useState([])

    React.useEffect(()=>{
        const getRecipe = async () =>{
            try{
                const data = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=3c6b8400-1ed2-47ce-867a-b73e154993ea`)
                searchResults(data.data.data.recipes)
                console.log(data.data.data.recipes)
            } catch{
                console.log("error getting ")
            }
        }

        getRecipe()
    },[])

    return <div className="recipe_list">
            {results.map(recipe=><RecipeListItem {...recipe}/>)}
        </div>
}

export {Recipelist}

// 3c6b8400-1ed2-47ce-867a-b73e154993ea
// 