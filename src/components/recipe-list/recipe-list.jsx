import React from 'react'
import './recipe-list.css'
import {RecipeListItem} from './recipe-list-item'
import axios from 'axios'
import leftArrow from './left-arrow.svg'
import rightArrow from './right-arrow.svg'
import {SkeletonLoader} from  './SkeletonLoader'

const Recipelist = ({search})=>{

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
    }

    const nextPage = (e)=>{
        e.preventDefault()
        setPage(curPage + 1)
    }

 return <div>
            {isLoading && <SkeletonLoader />}
        <div className="p-1 flex flex-wrap justify-evenly">
            {results.slice(curPage * 10 - 10, curPage * 10).map(recipe=>{
                return <RecipeListItem key={recipe.id} {...recipe}/>
            })}
        </div>
        <div className="p-8 navigationBtns justify-center flex w-full"> 

        <div className="w-full flex justify-center">{numberofPages === 1 || curPage > 1 ? <button className="flex py-1 px-9 focus:outline-none rounded-xl border-2 border-textblue text-textblue text-lg" onClick={prevPage}><img className="align-middle w-8" src={leftArrow} alt="Prev page" />&nbsp; Prev </button> : null}</div>

        <div className="w-full flex justify-center">{curPage < numberofPages ? <button className="flex py-1 px-9 focus:outline-none rounded-xl transition duration-1000 border-2 border-textblue text-textblue text-lg" onClick={nextPage}>Next &nbsp;<img className="align-middle w-8" src={rightArrow} alt="Next page" /></button> : null}</div>
        </div>
    </div>
}

export {Recipelist}

// 