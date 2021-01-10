import React from 'react'
import './recipe-details.css'
import axios from 'axios'

const RecipeDetails = ({match})=>{
React.useEffect(()=>{
    const getDetails = async ()=>{
        const data = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes/${match.params.id}?key${process.env.REACT_APP_API_KEY}`)
        const details = data.data.data.recipe
        console.log(match)
        console.log(details)
    }

    getDetails()
},[])

    return <div>Hellooooooooooooooooooo</div>

}

export {RecipeDetails}