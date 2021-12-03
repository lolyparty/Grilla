import React from 'react'
import axios from 'axios'
import like from './like.svg'

const RecipeDetails = ({match})=>{
    const [detailsResult, setDetails] = React.useState({})
    // const currentUrl = `http://grilla.vercel.app/${match.params.id}`
    const [ingredientsNumber, setIngredients] = React.useState(0)
    const [ingredientsDetails, setIngeredientsDetails] = React.useState([])
    const [filled, setFilled] = React.useState(false) 

    const Ingredients = (initial,number) =>{
        const data = ingredientsDetails.slice(initial,number).map((e, index)=>{
            return <p className="my-6" key={index}>{e.quantity}{e.unit} {e.description} </p>
        })
        return data
    }

    

    const likeUnlike = ()=>{
        setFilled(!filled)
    }
    


    React.useEffect(()=>{
        const getDetails = async ()=>{
            const data = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes/${match.params.id}?key${process.env.REACT_APP_API_KEY}`)
            const details = data.data.data.recipe
            setDetails(details)
            setIngredients(Math.ceil(details.ingredients.length/2))
            setIngeredientsDetails(details.ingredients)
            console.log(details)
        }

        getDetails()
},[match.params.id])

    return <div>
                <div className=" w-full flex justify-center">
                    <div className="w-10/12 relative">
                        <div className="absolute w-full h-full top-0 left-0 rounded-md overlay "></div>
                        <img className="bg-cover rounded-md w-full max-h-100" src={detailsResult.image_url} alt={detailsResult.title} />
                    </div>
                </div>
                <div className="flex justify-center z-50">
                       {detailsResult.title ?  <p className="p-5 transform -translate-y-10 -rotate-2 details_name text-white font-bold text-2xl">{detailsResult.title}</p> : null}
                </div>
                <div className="mx-auto my-2 flex justify-end w-10/12" >
                    <svg viewBox="0 0 45 39.6" width="75" height="65" className={filled ? 'clicked likeButton': "likeButton"}>
                    <path id="liking" transform="translate(5,5)" transition="1s" onClick={likeUnlike} stroke="#ff0000" stroke-width="2" fill={filled ? '#ff0000' : '#F3F3F3'}  d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
                        c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
                    </svg>
                </div>
                {ingredientsDetails.length > 0 ? <div className="bg-gray-100">
                            <p className="text-center mx-auto text-textblue font-bold text-2xl my-3">RECIPE INGREDIENTS</p>
                            <div className="flex justify-evenly">
                                <div className="my-2 mx-6 text-ingredientColor font-bold text-md">
                                    {Ingredients(0, ingredientsNumber)}
                                </div>
                                <div className="my-2 mx-6 text-ingredientColor font-bold text-md">
                                    {Ingredients(ingredientsNumber)}
                                </div>
                            </div>
                        </div>  
                        
                : console.log('no ingredients')}
                {/* {console.log(detailsResult.ingredients)} */}
            </div>
}


{/* <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-text="Hey, everyone checkout this recipe." data-url={`http://grilla.vercel.app/${match.params.id}`} data-show-count="false">Tweet</a>
                <script src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}
export {RecipeDetails}

//image url
//title
//publisher
//cooking tmie
//ingredient
//servings
//source url