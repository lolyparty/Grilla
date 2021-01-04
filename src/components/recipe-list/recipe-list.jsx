import React from 'react'
import './recipe-list.css'
import {RecipeListItem} from './recipe-list-item'
import axios from 'axios'
import {Api_Key} from '../../config'

const Recipelist = ({search})=>{

    const [results, searchResults] = React.useState([])

    React.useEffect(()=>{
        const getRecipe = async () =>{
            try{
                if(search !== ''){
                    const data = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}&key=${Api_Key}`)
                searchResults(data.data.data.recipes)
                }
                
            } catch{
                console.log("error getting lists")
            }
        }

        getRecipe()
    },[search])

    return <div className="recipe_list">
            {results.map(recipe=><RecipeListItem key={recipe.id} {...recipe}/>)}
        </div>
}

export {Recipelist}

// 