import React from 'react';
import './recipe-list.css'


const SkeletonLoader = ()=>{
    return  (<div className="p-3 flex flex-wrap justify-evenly">
                <div className=" skeleton p-3 flex gap-x-4 my-3 mx-2 shadow-lg bg-white w-96 rounded-2xl relative overflow-hidden"> 
                    <div className="w-20 h-20 rounded-full mt-3 bg-gray-200 "></div>
                        <div className="mt-5">
                            <p className="bg-gray-200 py-3 px-20 rounded-xl"></p>
                            <p className="mt-3 inline-block bg-gray-200 py-2 px-12 rounded-lg"></p>
                        </div>
                </div>
                <div className=" skeleton p-3 flex gap-x-4 my-3 mx-2 shadow-lg bg-white w-96 rounded-2xl relative overflow-hidden"> 
                    <div className="w-20 h-20 rounded-full mt-3 bg-gray-200 "></div>
                        <div className="mt-5">
                            <p className="bg-gray-200 py-3 px-20 rounded-xl"></p>
                            <p className="mt-3 inline-block bg-gray-200 py-2 px-12 rounded-lg"></p>
                        </div>
                </div>
                <div className=" skeleton p-3 flex gap-x-4 my-3 mx-2 shadow-lg bg-white w-96 rounded-2xl relative overflow-hidden"> 
                    <div className="w-20 h-20 rounded-full mt-3 bg-gray-200 "></div>
                        <div className="mt-5">
                            <p className="bg-gray-200 py-3 px-20 rounded-xl"></p>
                            <p className="mt-3 inline-block bg-gray-200 py-2 px-12 rounded-lg"></p>
                        </div>
                </div>
                <div className=" skeleton p-3 flex gap-x-4 my-3 mx-2 shadow-lg bg-white w-96 rounded-2xl relative overflow-hidden"> 
                    <div className="w-20 h-20 rounded-full mt-3 bg-gray-200 "></div>
                        <div className="mt-5">
                            <p className="bg-gray-200 py-3 px-20 rounded-xl"></p>
                            <p className="mt-3 inline-block bg-gray-200 py-2 px-12 rounded-lg"></p>
                        </div>
                </div>
                <div className=" skeleton p-3 flex gap-x-4 my-3 mx-2 shadow-lg bg-white w-96 rounded-2xl relative overflow-hidden"> 
                    <div className="w-20 h-20 rounded-full mt-3 bg-gray-200 "></div>
                        <div className="mt-5">
                            <p className="bg-gray-200 py-3 px-20 rounded-xl"></p>
                            <p className="mt-3 inline-block bg-gray-200 py-2 px-12 rounded-lg"></p>
                        </div>
                </div>
                <div className=" skeleton p-3 flex gap-x-4 my-3 mx-2 shadow-lg bg-white w-96 rounded-2xl relative overflow-hidden"> 
                    <div className="w-20 h-20 rounded-full mt-3 bg-gray-200 "></div>
                        <div className="mt-5">
                            <p className="bg-gray-200 py-3 px-20 rounded-xl"></p>
                            <p className="mt-3 inline-block bg-gray-200 py-2 px-12 rounded-lg"></p>
                        </div>
                </div>
                <div className=" skeleton p-3 flex gap-x-4 my-3 mx-2 shadow-lg bg-white w-96 rounded-2xl relative overflow-hidden"> 
                    <div className="w-20 h-20 rounded-full mt-3 bg-gray-200 "></div>
                        <div className="mt-5">
                            <p className="bg-gray-200 py-3 px-20 rounded-xl"></p>
                            <p className="mt-3 inline-block bg-gray-200 py-2 px-12 rounded-lg"></p>
                        </div>
                </div>
                <div className=" skeleton p-3 flex gap-x-4 my-3 mx-2 shadow-lg bg-white w-96 rounded-2xl relative overflow-hidden"> 
                    <div className="w-20 h-20 rounded-full mt-3 bg-gray-200 "></div>
                        <div className="mt-5">
                            <p className="bg-gray-200 py-3 px-20 rounded-xl"></p>
                            <p className="mt-3 inline-block bg-gray-200 py-2 px-12 rounded-lg"></p>
                        </div>
                </div>
                <div className=" skeleton p-3 flex gap-x-4 my-3 mx-2 shadow-lg bg-white w-96 rounded-2xl relative overflow-hidden"> 
                    <div className="w-20 h-20 rounded-full mt-3 bg-gray-200 "></div>
                        <div className="mt-5">
                            <p className="bg-gray-200 py-3 px-20 rounded-xl"></p>
                            <p className="mt-3 inline-block bg-gray-200 py-2 px-12 rounded-lg"></p>
                        </div>
                </div>
                <div className=" skeleton p-3 flex gap-x-4 my-3 mx-2 shadow-lg bg-white w-96 rounded-2xl relative overflow-hidden"> 
                    <div className="w-20 h-20 rounded-full mt-3 bg-gray-200 "></div>
                        <div className="mt-5">
                            <p className="bg-gray-200 py-3 px-20 rounded-xl"></p>
                            <p className="mt-3 inline-block bg-gray-200 py-2 px-12 rounded-lg"></p>
                        </div>
                </div>
            </div>)
}

export {SkeletonLoader}