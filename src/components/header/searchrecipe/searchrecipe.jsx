import React from 'react';
import {Link} from 'react-router-dom';
import searchIcon from './transparency.svg'

const Searchrecipe = ({changed, Search, inputValue, keyPress}) =>{
    return <div className="relative flex justify-end p-4 mdd:px-2 lg:pl-3 smm:pl-0 xsm:py-6 xsm:ml-0">
        <div>
            <input type="text" onChange={changed} placeholder="Search Recipe" onKeyPress={keyPress} name="Search recipe" className="rounded-2xl border-0 my-4 mx-2 px-6 md:px-4 w-80 lg:w-72 md:w-64 smm:w-56 py-2 hover:shadow-lg xsm:w-40 xsm:my-1 xsm:py-1 mt-1" value={inputValue}/>
            <button onClick={Search} className="px-4 xsm:px-1.5 cursor-pointer py-2 xsm:py-1 bg-background1 rounded-xl xsm:rounded-md"><Link className="no-underline text-white text-md" to='/'><img src={searchIcon} alt="serach" className="w-8 h-6"/></Link></button> 
        </div>
    </div>
}

export {Searchrecipe}