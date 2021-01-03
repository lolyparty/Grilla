import React from 'react'
import './recipe-list.css'
import {RecipeListItem} from './recipe-list-item'
import axios from 'axios'

const Recipelist = ({search})=>{

    React.useEffect(()=>{
        const getRecipe = async () =>{
            try{
                const data = await axios.get('https://forkify-api.herokuapp.com/api/v2/recipes?search={}&key={}')
            } catch{
                
            }
        }
    })

    return <div className="">
            {/* {recipes.map(recipe=>{ */}
                <RecipeListItem />
            {/* })} */}
        </div>
}

export {Recipelist}

// 3c6b8400-1ed2-47ce-867a-b73e154993ea
// 