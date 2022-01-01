import React from 'react'
import {useParams} from 'react-router-dom' 
import axios from 'axios'
import point from './point.svg'
import arrow from './rightArrow.svg'
import time from './time.svg'
import MetaTags from 'react-meta-tags';
import serving from './servings.svg'

const RecipeDetails = ({likedItems, setLikedItems})=>{
    const [detailsResult, setDetails] = React.useState({})
    const [ingredientsNumber, setIngredients] = React.useState(0)
    const [ingredientsDetails, setIngeredientsDetails] = React.useState([])
    const [filled, setFilled] = React.useState(false)
    let params = useParams()
    

    const Ingredients = (initial,number) =>{
        const data = ingredientsDetails.slice(initial,number).map((e, index)=>{
            return <p className="my-6 text-xl" key={index}><img className="inline-block mr-1" src={point} alt='ingredient' />{e.quantity}{e.unit} {e.description} </p>
        })
        return data
    }

    const getIndex = (id, arr, purpose)=>{
        
            for(var i =0 ; i < likedItems.length ; i++){
                if(arr[i].id === id){
                    if(purpose === 'removeLike'){return i}
                    else if(purpose === 'checkLike'){
                        // console.log(arr[i].id === id)
                        return arr[i].id === id
                    }
                }
                
            }
            
        } 

    let newRecipe = {}
    

    const likeUnlike = ()=>{
        
        // console.log(filled)
        if(filled === false){
            setFilled(true)
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
            console.log(likedItems)
            // localStorage.setItem('likes', JSON.stringify(likedItems))
        } else if(filled === true && likedItems.length > 0){
            setFilled(false)
            let num = getIndex(detailsResult.id, likedItems,'removeLike')
            likedItems.splice(num,1)
            setLikedItems(prev =>{
                prev = [...likedItems]
                return prev
            })
            localStorage.removeItem('likes')
            localStorage.setItem('likes', JSON.stringify(likedItems))
        }
    }
    


    React.useEffect(()=>{
        const getDetails = async ()=>{
            const data = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes/${params.id}?key${process.env.REACT_APP_API_KEY}`)
            const details = data.data.data.recipe
            setDetails(details)
            setIngredients(Math.ceil(details.ingredients.length/2))
            setIngeredientsDetails(details.ingredients)
            // console.log(details)
            
            // console.log(newRecipe)
            if(getIndex(details.id, likedItems,'checkLike')){
                setFilled(true)
            } else{
                setFilled(false)
            }
        }

        getDetails()
        
},[params.id, likedItems])

    return <div>

                <MetaTags>
                    <meta property="og:description" content={`Recipe of ${detailsResult.title}`} />
                    <meta property="og:title" content={`${detailsResult.title}`} />
                    <meta property="og:image" content={`${detailsResult.image_url}`} />
                    <meta property="og:image:secure_url" content={`https://secure.${detailsResult.image_url}`} />
                    <meta property="og:image:type" content="image/jpeg" />
                    <meta property="og:image:width" content="400" />
                    <meta property="og:image:height" content="300" />
                    <meta property="og:url"   content={`${window.location.href}`} />
                </MetaTags>

                {Object.keys(detailsResult).length > 0 ? <div> <div className=" w-full flex justify-center">
                    <div className="w-9/12 relative ">
                        <div className="absolute w-full h-full top-0 left-0 rounded-md overlay mx-auto"></div>
                        <img className="bg-cover rounded-md w-full max-h-100 mx-auto" src={detailsResult.image_url} alt={detailsResult.title} />
                    </div>
                </div>
                <div className="flex justify-center z-50">
                       {detailsResult.title ?  <p className="p-5 transform -translate-y-10 details_name text-white font-bold text-2xl">{detailsResult.title}</p> : null}
                </div>
                <div className="mx-auto my-2 flex justify-between w-10/12" >
                    <div className="text-ingredientColor font-bold text-xl flex pt-2.5">
                        <div ><img src={time} alt="time" className="inline-block"/> {detailsResult.cooking_time} mins</div>
                        <div className="ml-4"><img src={serving} alt="number of servings" className="inline-block"/>  {detailsResult.servings} servings</div>
                    </div>
                    {ingredientsDetails.length > 0 ? <svg viewBox="0 0 45 39.6" width="60" height="50" className={filled ? 'clicked likeButton': "likeButton"}>
                    <path id="liking" transform="translate(5,5)" transition="1s" onClick={likeUnlike} stroke="#ff0000" stroke-width="2" fill={filled ? '#ff0000' : '#F3F3F3'}  d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
                        c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
                    </svg> : null}
                </div>
                {ingredientsDetails.length > 0 ? <div className="bg-gray-100 pb-5">
                            <p className="text-center mx-auto text-textblue font-bold text-2xl my-3">RECIPE INGREDIENTS</p>
                            <div className="flex justify-evenly w-11/12 mx-auto">
                                <div className="my-2 mx-auto text-ingredientColor font-bold text-md pl-10 w-6/12">
                                    {Ingredients(0, ingredientsNumber)}
                                </div>
                                <div className="my-2 mx-auto text-ingredientColor font-bold text-md w-6/12">
                               {Ingredients(ingredientsNumber)}
                                </div>
                            </div>
                        </div>  
                : null}
                <div className="more text-center bg-gray-200 p-5 pb-9">
                    <div className="text-ingredientColor text-center my-3 p-2 leading-3 text-xl">This <span className="font-bold">{detailsResult.title}</span> recipe was carefully curated by <span className="font-bold">{detailsResult.publisher}</span>.
                    <p className="my-4 text-xl">Check out directions on their website.</p>
                    </div>
                    <div>
                    <a href={detailsResult.source_url} className="p-3 px-5 bg-background2 my-10 text-white rounded-xl mx-auto font-bold text-xl" rel="noreferrer" target="_blank"> Directions <img src={arrow} alt='directions' className="inline-block mb-0.5"/></a>
                    </div>
                    <div className="share">
                    <p className="mt-7 text-xl text-ingredientColor inline-block">Share this recipe with family and friends: </p>
                    <div className="flex justify-center my-4">
                        <div className="mr-2">
                            <div class="fb-share-button"
                            data-href={`https://grilla.vercel.app/${detailsResult.id}`} 
                            data-layout="button_count" data-size="large">
                            </div>
                        </div>
                        <div className="ml-4">
                            <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false" data-size="large" data-text={`Hey guys, check out the recipe of ${detailsResult.title} that I found on Grilla`}>Tweet</a>
                        </div>
                    </div>
                    </div>
                </div> 
                </div> : null}
            </div> 
}

export {RecipeDetails}