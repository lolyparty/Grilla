import React from 'react'
import axios from 'axios'
import point from './point.svg'
import arrow from './rightArrow.svg'

const RecipeDetails = ({match})=>{
    const [detailsResult, setDetails] = React.useState({})
    // const currentUrl = `http://grilla.vercel.app/${match.params.id}`
    const [ingredientsNumber, setIngredients] = React.useState(0)
    const [ingredientsDetails, setIngeredientsDetails] = React.useState([])
    const [filled, setFilled] = React.useState(false) 

    const Ingredients = (initial,number) =>{
        const data = ingredientsDetails.slice(initial,number).map((e, index)=>{
            return <p className="my-6 text-lg" key={index}><img className="inline-block mr-1" src={point} alt='ingredient' />{e.quantity}{e.unit} {e.description} </p>
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
                {Object.keys(detailsResult).length > 0 ? <div> <div className=" w-full flex justify-center">
                    <div className="w-9/12 relative ">
                        <div className="absolute w-full h-full top-0 left-0 rounded-md overlay mx-auto"></div>
                        <img className="bg-cover rounded-md w-full max-h-100 mx-auto" src={detailsResult.image_url} alt={detailsResult.title} />
                    </div>
                </div>
                <div className="flex justify-center z-50">
                       {detailsResult.title ?  <p className="p-5 transform -translate-y-10 details_name text-white font-bold text-2xl">{detailsResult.title}</p> : null}
                </div>
                <div className="mx-auto my-2 flex justify-end w-10/12" >
                    {ingredientsDetails.length > 0 ? <svg viewBox="0 0 45 39.6" width="75" height="65" className={filled ? 'clicked likeButton': "likeButton"}>
                    <path id="liking" transform="translate(5,5)" transition="1s" onClick={likeUnlike} stroke="#ff0000" stroke-width="2" fill={filled ? '#ff0000' : '#F3F3F3'}  d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
                        c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
                    </svg> : null}
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
                        
                : null}
                <div className="more text-center bg-gray-200 p-5 pb-9">
                    <div className="text-ingredientColor text-center my-3 p-2 leading-3 text-lg">This <span className="font-bold">{detailsResult.title}</span> recipe was carefully curated by <span className="font-bold">{detailsResult.publisher}</span>.
                    <p className="my-4 text-lg">Check out directions on their website.</p>
                    </div>
                    <div>
                    <a href={detailsResult.source_url} className="p-3 bg-background2 my-10 text-white rounded-xl mx-auto font-bold" rel="noreferrer" target="_blank"> Directions <img src={arrow} alt='directions' className="inline-block mb-0.5"/></a>
                    </div>
                    <div className="share">
                    <p className="mt-7 text-lg text-ingredientColor">Share this recipe with your friends and family:</p>
                    </div>
                </div> 
                </div> : null}
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