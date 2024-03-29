import React from 'react'
import './recipe-list.css'
import {RecipeListItem} from './recipe-list-item'
import axios from 'axios'
import leftArrow from '../SVGs/left-arrow.svg'
import rightArrow from '../SVGs/right-arrow.svg'
import {SkeletonLoader} from  './SkeletonLoader'

const Recipelist = ({search, closeLikes, setShowLikes})=>{

    const [results, searchResults] = React.useState([])

    const [isLoading, setLoading] = React.useState(false)

    const [curPage, setPage] = React.useState(1)

    const [numberofPages, setnumberofPages] = React.useState(0)



    React.useEffect(()=>{
        const getRecipe = async () =>{
            try{
                if(search !== ''){
                    setnumberofPages(0)
                    setPage(1)
                    searchResults([])
                    setLoading(true)
                    const data = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}&key=${process.env.REACT_APP_API_KEY}`)
                    searchResults(data.data.data.recipes)
                    setShowLikes(false)
                    setLoading(false)
                    setnumberofPages(Math.ceil(data.data.data.recipes.length/10))
                    
                }
                
            } catch{
                console.log("error getting lists")
            }
        }

        getRecipe()
    },[search])

    const prevPage = (e)=>{
        e.preventDefault()
        setPage(curPage - 1)
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    const nextPage = (e)=>{
        e.preventDefault()
        setPage(curPage + 1)
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

 return <div>
            {isLoading ? <SkeletonLoader />: <div>
        <div className="p-1 flex flex-wrap justify-evenly">
            {results.slice(curPage * 10 - 10, curPage * 10).map(recipe=>{
                return <RecipeListItem closeLikes={closeLikes} key={recipe.id} {...recipe}/>
            })}
        </div>
        <div className="p-8 navigationBtns justify-center flex w-full items-center"> 

        <div className="w-full flex justify-center items-center">{curPage > 1 ? <button className="flex px-3 py-1 xsm:px-2 focus:outline-none rounded-xl transition duration-1000 border-2 border-textblue text-textblue text-lg" onClick={prevPage}><img className="align-middle w-8 xxsm:w-5 xsm:ml-0 xsm:pt-1" src={leftArrow} alt="Prev page" />&nbsp; Prev </button> : null}</div>

        <div className="w-full flex items-center justify-center">{curPage < numberofPages ? <button className="flex py-1 px-3 xsm:px-2 focus:outline-none rounded-xl transition duration-1000 border-2 border-textblue text-textblue text-lg" onClick={nextPage}>Next &nbsp;<img className="align-middle w-8 xxsm:w-5 xsm:ml-0 xsm:pt-1" src={rightArrow} alt="Next page" /></button> : null}</div>
        </div>
    </div>}
    </div>
}

export {Recipelist}

// 