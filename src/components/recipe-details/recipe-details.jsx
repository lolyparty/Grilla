import React from 'react'
import {useParams} from 'react-router-dom' 
import axios from 'axios'
import point from '../SVGs/point.svg'
import arrow from '../SVGs/rightArrow.svg'
import time from '../SVGs/time.svg'
import MetaTags from 'react-meta-tags';
import serving from '../SVGs/servings.svg'
import './recipe_details.css'
import { ShareButtons } from './shareButtons'

const RecipeDetails = ({likedItems, setLikedItems, setShowLikes})=>{
    const [detailsResult, setDetails] = React.useState({})
    const [ingredientsNumber, setIngredients] = React.useState(0)
    const [ingredientsDetails, setIngeredientsDetails] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    let params = useParams()
    

    const Ingredients = (initial,number) =>{
        const data = ingredientsDetails.slice(initial,number).map((e, index)=>{
            return <p className="my-6 xxsm:my-3 text-xl xxsm:text-base" key={index}><img className="inline-block mr-1" src={point} alt='ingredient' />{e.quantity}{e.unit} {e.description} </p>
        })
        return data
    }

    const getIndex = (id, arr, purpose)=>{
        
            for(var i =0 ; i < likedItems.length ; i++){
                if(arr[i].id === id){
                    if(purpose === 'removeLike'){return i}
                    else if(purpose === 'checkLike'){
                        // console.log(arr[i].id === id, likedItems)
                        return arr[i].id === id
                    }
                }
                
            }
            
        } 

    let newRecipe = {}
    

    const likeUnlike = ()=>{
        if(getIndex(detailsResult.id, likedItems,'checkLike')){
            let num = getIndex(detailsResult.id, likedItems,'removeLike')
            likedItems.splice(num,1)
            setLikedItems(prev =>{
                prev = [...likedItems]
                return prev
            })
            localStorage.removeItem('likes')
            localStorage.setItem('likes', JSON.stringify(likedItems))
        } else{
            newRecipe = {
                id:`${detailsResult.id}`,
                image:`${detailsResult.image_url}`,
                publisher:`${detailsResult.publisher}`,
                title:`${detailsResult.title}`
            }
            setLikedItems(prev => {
                return [...prev, newRecipe]
            })
            localStorage.removeItem('likes')
        }
    }

    React.useEffect(()=>{
        const getDetails = async ()=>{
            setShowLikes(false)
            setLoading(true)
            const data = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes/${params.id}?key${process.env.REACT_APP_API_KEY}`)
            const details = data.data.data.recipe
            setDetails(details)
            setIngredients(Math.ceil(details.ingredients.length/2))
            setIngeredientsDetails(details.ingredients)
            setLoading(false)
        }
        getDetails()

},[params.id])

    return <div>

                <MetaTags>
                    <meta property="og:url"   content={`${window.location.href}`} />
                </MetaTags> 

                {loading ? <div className="w-full">
                        <div className="w-10/12 h-101 mx-auto bg-gray-200 relative loader overflow-hidden rounded-md"></div>
                        <div className="mx-auto w-1/4 bg-gray-200 rounded-md h-12 loader overflow-hidden relative my-6"></div>
                        <div className="flex justify-center w-full">
                            <div className="w-full">
                                <div className="bg-gray-200 relative loader overflow-hidden rounded-md h-10 my-3 w-8/12 mx-auto"></div>
                                <div className="bg-gray-200 relative loader overflow-hidden rounded-md h-10 my-3 w-8/12 mx-auto"></div>
                                <div className="bg-gray-200 relative loader overflow-hidden rounded-md h-10 my-3 w-8/12 mx-auto"></div>
                                <div className="bg-gray-200 relative loader overflow-hidden rounded-md h-10 my-3 w-8/12 mx-auto"></div>
                                <div className="bg-gray-200 relative loader overflow-hidden rounded-md h-10 my-3 w-8/12 mx-auto"></div>
                            </div>
                            <div className="w-full">
                                <div className="bg-gray-200 relative loader overflow-hidden rounded-md h-10 my-3 w-8/12 mx-auto"></div>
                                <div className="bg-gray-200 relative loader overflow-hidden rounded-md h-10 my-3 w-8/12 mx-auto"></div>
                                <div className="bg-gray-200 relative loader overflow-hidden rounded-md h-10 my-3 w-8/12 mx-auto"></div>
                                <div className="bg-gray-200 relative loader overflow-hidden rounded-md h-10 my-3 w-8/12 mx-auto"></div>
                                <div className="bg-gray-200 relative loader overflow-hidden rounded-md h-10 my-3 w-8/12 mx-auto"></div>
                            </div>
                    </div>
                </div> : Object.keys(detailsResult).length > 0 ? <div> <div className=" w-full flex justify-center">
                    <div className="w-9/12 lg:w-10/12 mdd:w-11/12 relative ">
                        <div className="absolute w-full h-full top-0 left-0 rounded-md overlay mx-auto"></div>
                        <img className="bg-cover rounded-md w-full max-h-100 mx-auto" src={detailsResult.image_url} alt={detailsResult.title} />
                    </div>
                </div>
                <div className="flex justify-center z-50">
                       {detailsResult.title ?  <p className="p-5 transform -translate-y-10 details_name text-white font-bold text-2xl text-center xxsm:text-xs mdd:text-base xxsm:p-2 xxsm:-translate-y-5">{detailsResult.title}</p> : null}
                </div>
                <div className="mx-auto my-2 flex justify-between w-10/12 mdd:w-11/12 items-center" >
                    <div className="text-ingredientColor font-bold text-xl flex items-center">
                        <div className="xxsm:text-sm"><img src={time} alt="time" className="inline-block xxsm:h-4 xxsm:w-4"/> {detailsResult.cooking_time} mins</div>
                        <div className="ml-4 xxsm:text-sm"><img src={serving} alt="number of servings" className="inline-block xxsm:h-4 xxsm:w-4"/>  {detailsResult.servings} servings</div>
                    </div>
                    {ingredientsDetails.length > 0 ? <svg viewBox="0 0 45 39.6" width="60" height="50" className={`xxsm:h-6 xxsm:w-7 mdd:h-9 mdd:w-10 ${getIndex(detailsResult.id, likedItems,'checkLike') ? 'clicked likeButton': "likeButton"}`}>
                    <path id="liking" transform="translate(5,5)" transition="1s" onClick={likeUnlike} stroke="#ff0000" stroke-width="2" fill={getIndex(detailsResult.id, likedItems,'checkLike') ? '#ff0000' : '#F3F3F3'}  d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
                        c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
                    </svg> : null}
                </div>
                {ingredientsDetails.length > 0 ? <div className="bg-gray-100 pb-5">
                            <p className="text-center mx-auto text-textblue font-bold text-2xl my-3 xxsm:text-lg xxsm:mb-1">RECIPE INGREDIENTS</p>
                            <div className="flex justify-evenly w-11/12 xxsm:w-full mx-auto">
                                <div className="my-2 xxsm:mt-0 mx-auto text-ingredientColor font-bold p-4 xxsm:pt-0 pl-10 w-6/12 xxsm:p-1">
                                    {Ingredients(0, ingredientsNumber)}
                                </div>
                                <div className="my-2 xxsm:mt-0 mx-auto text-ingredientColor font-bold p-4 xxsm:pt-0 pl-10 w-6/12 xxsm:p-1">
                               {Ingredients(ingredientsNumber)}
                                </div>
                            </div>
                        </div>  
                : null}
                <div className="more text-center bg-gray-200 p-5 pb-9">
                    <div className="text-ingredientColor text-center my-3 xxsm:mb-1 p-2 text-xl xxsm:text-base">
                        <p>This <span className="font-bold">{detailsResult.title}</span> recipe was carefully curated by <span className="font-bold">{detailsResult.publisher}.</span></p>
                        <p className="my-4 text-xl xxsm:text-base xxsm:mt-2">Check out directions on their website.</p>
                    </div>
                    <div>
                    <a href={detailsResult.source_url} className="p-3 px-5 bg-background2 my-10 xxsm:my-5 xxsm:mt-3 text-white rounded-xl mx-auto font-bold text-xl xxsm:text-base xxsm:py-3 xxsm:p-2" rel="noreferrer" target="_blank"> Directions <img src={arrow} alt='directions' className="inline-block mb-0.5"/></a>
                    </div>
                    <div className="share">
                    <p className="mt-7 text-xl xxsm:text-base text-ingredientColor inline-block">Share this recipe with family and friends: </p>
                    <ShareButtons detailsResult={detailsResult} />
                    </div>
                </div> 
                </div> : null
                }
            </div> 
}

export {RecipeDetails}