import React from 'react'
import './recipe-details.css'
import axios from 'axios'
import {Api_Key} from '../../config'

const RecipeDetails = ({match})=>{
React.useEffect(()=>{
    const getDetails = async ()=>{
        const data = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes/${match.params.id}?key${Api_Key}`)
        const details = data.data.data.recipe
        console.log(match)
        console.log(details)
    }

    getDetails()
},[])

    return <div>Hellooooooooooooooooooo</div>

}

export {RecipeDetails}