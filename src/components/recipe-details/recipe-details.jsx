import React from 'react'
import axios from 'axios'

const RecipeDetails = ({match})=>{
    const [detailsResult, setDetails] = React.useState({})

    React.useEffect(()=>{
        const getDetails = async ()=>{
            const data = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes/${match.params.id}?key${process.env.REACT_APP_API_KEY}`)
            const details = data.data.data.recipe
            setDetails(details)
        }

        getDetails()
},[match.params.id])

    return <div>
        <div className="w-20">
            <img className="bg-cover" src="" alt="" />
        </div>
    </div>

}

export {RecipeDetails}