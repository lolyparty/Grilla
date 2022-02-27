import React from 'react'
import {Link} from 'react-router-dom'
import './likes.css'


const LikesList =({likedItems,setLikedItems})=>{

    // const svgRef = useRef(null)

    const getIndex = (id, arr)=>{
        for(var i =0 ; i < likedItems.length ; i++){
            if(arr[i].id === id){
                return i
            }
        }
    }

    
    return <div className="absolute right-0 top-20 bg-white rounded-md p-2 pb-0 max-h-96 overflow-y-auto likescontainer z-50 last:border-b-0">
        {likedItems.length > 0 ? likedItems.map((item)=> 
            <div className="p-3 flex border-b-gray-100 border-b-2 " key={item.id} id={item.id}>
                <Link  to={`/${item.id}`} >
                    <div className="w-20 h-20 overflow-hidden rounded-full mt-3 flex justify-center">
                        <img src={item.image} alt="" className="w-full"/>
                    </div>
                </Link>
                <div className="mt-3 ml-4 text-textblue w-full">
                    <Link  to={`/${item.id}`} >
                        <h1 className="recipe_name text-xl sm:text-2xl">{`${item.title.slice(0,24)}...`}</h1>
                    </Link>
                    <div className="flex justify-between">
                    <p className="mt-4 inline-block mr-6">{item.publisher}</p><button className="focus:outline-none" onClick={(e)=>{
                        e.preventDefault()
                        let num = getIndex(item.id, likedItems)
                        // console.log(likedItems, num, item.id)
                        likedItems.splice(num,1)
                        // console.log(likedItems)
                        setLikedItems(prev =>{
                                prev = [...likedItems]
                                return prev
                        })
                        localStorage.removeItem('likes')
                        localStorage.setItem('likes', JSON.stringify(likedItems))
                    }}><svg viewBox="0 0 45 39.6" width="30" height="25" className='clicked likeButton inline-block mt-4'>
                    <path id="liking" transform="translate(5,5)" transition="1s"  stroke="#ff0000" stroke-width="2" fill='#ff0000'  d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
                        c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/> 
                    </svg></button>
                    </div>
                </div>
            </div>
         ) : 
        <div className="flex justify-center items-center h-64 max-w-xs text-center text-ingredientColor">Oops! Favourite recipes' empty, search and like recipes for them to appear here</div>}
    </div>
}

export {LikesList}