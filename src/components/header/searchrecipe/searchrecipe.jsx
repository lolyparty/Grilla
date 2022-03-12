import React from 'react';
// import {Link} from 'react-router-dom';
import searchIcon from '../../SVGs/transparency.svg'

const Searchrecipe = ({changed, Search, inputValue, keyPress}) =>{
    return <div className="relative flex items-center p-4 mdd:px-2 lg:pl-3 smm:pl-0 smm:pt-6 xsm:pt-6 xsm:ml-0 xxsm:pt-0 xxsm:order-3 xxsm:w-10/12 xxsm:justify-center xxsm:ml-1">
            <input type="text" onChange={changed} placeholder="Search Recipe" onKeyPress={keyPress} name="Search recipe" className="rounded-2xl border-0 mx-2 px-6 smm:px-3 smm:rounded-md md:px-4 w-80 lg:w-72 md:w-64 smm:w-52 py-2 smm:py-1.5 hover:shadow-lg xsm:w-44 xsm:my-1 xsm:py-1 xxsm:ml-2 xxsm:mr-2 xxsm:px-2 xsm:rounded-lg xxsm:w-40 outline-none" value={inputValue}/>
            <button onClick={Search} className="px-4 h-10 w-14 smm:pl-2 smm:w-9 smm:h-9 smm:px-1  xsm:h-8  smm:rounded-md xsm:px-1.5 cursor-pointer xsm:py-0 bg-background1 rounded-xl">
                <img src={searchIcon} alt="search" className="smm:w-5 smm:h-5 xsm:w-5 xsm:h-5 xxsm:h-5 xxsm:w-5 smm:mr-0 mr-0"/>
            </button>
    </div>
}

export {Searchrecipe}