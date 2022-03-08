import React from 'react';
// import {Link} from 'react-router-dom';
import searchIcon from '../../SVGs/transparency.svg'

const Searchrecipe = ({changed, Search, inputValue, keyPress}) =>{
    return <div className="relative flex items-center p-4 mdd:px-2 lg:pl-3 smm:pl-0 xsm:pt-8 xsm:ml-0 xxsm:pt-0 xxsm:order-3 xxsm:w-10/12 xxsm:justify-center xxsm:ml-7">
            <input type="text" onChange={changed} placeholder="Search Recipe" onKeyPress={keyPress} name="Search recipe" className="rounded-2xl border-0 mx-2 px-6 md:px-4 w-80 lg:w-72 md:w-64 smm:w-56 py-2 hover:shadow-lg xsm:w-36 xsm:my-1 xxsm:ml-2 xxsm:mr-2 xxsm:px-2 xsm:rounded-lg xxsm:w-40 outline-none" value={inputValue}/>

            <button onClick={Search} className="px-4 h-10 w-14 xsm:w-10 xsm:h-8 xsm:rounded-md xsm:px-1.5 cursor-pointer xsm:py-0 xxsm:h-10 xxsm:w-9  bg-background1 rounded-xl">
                <img src={searchIcon} alt="search" className="xsm:w-4 xsm:h-4 xxsm:w-5 xxsm:h-5 mr-0"/>
            </button>
    </div>
}

export {Searchrecipe}