import React from 'react';
// import {Link} from 'react-router-dom';
import searchIcon from '../../SVGs/transparency.svg'

const Searchrecipe = ({changed, Search, inputValue, keyPress}) =>{
    return <div className="relative flex items-center p-4 mdd:px-2 lg:pl-1 lg:pr-2 mdd:pl-0 mdd:pt-6 xsm:pt-6 xsm:ml-0 xxsm:pt-0 xxsm:order-3 xxsm:w-10/12 xxsm:justify-center xxsm:ml-1">
            <input type="text" onChange={changed} placeholder="Search Recipe" onKeyPress={keyPress} name="Search recipe" className="rounded-xl border-0 mx-2 px-6 mdd:px-3 mdd:rounded-md md:px-4 w-80 lg:w-60 md:w-64 mdd:w-56 py-2 mdd:py-1.5 hover:shadow-lg xsm:w-44 xsm:my-1 xsm:py-1 xxsm:ml-2 xxsm:mr-2 xxsm:px-2 xsm:rounded-lg xxsm:w-40 outline-none" value={inputValue}/>
            <button onClick={Search} className="px-4 h-10 w-14 mdd:pl-2 mdd:w-9 mdd:h-9 mdd:px-1  xsm:h-8  mdd:rounded-md xsm:px-1.5 cursor-pointer xsm:py-0 bg-background1 rounded-xl">
                <img src={searchIcon} alt="search" className="mdd:w-5 mdd:h-5 xsm:w-5 xsm:h-5 xxsm:h-5 xxsm:w-5 mdd:mr-0 mr-0"/>
            </button>
    </div>
}

export {Searchrecipe}