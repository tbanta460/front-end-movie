import React, {useEffect, useState} from 'react';

const Footer = () => {
    return (
        <>
            <div className="p-8">
                <div className="flex flex-row justify-around">
                    <div >
                        <ul className="flex flex-col lg:flex-row text-white my-5">
                            <li className="mx-4 cursor-pointer">
                                <span className="inline-block text-xs lg:text-base">About MyMovie</span>
                            </li>
                            <li className="mx-4 cursor-pointer my-5 lg:my-0">
                                <span className="inline-block text-xs lg:text-base">Terms Of Use</span>
                            </li>
                            <li className="mx-4 cursor-pointer">
                                <span className="inline-block text-xs lg:text-base">Privacy Policy</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center lg:items-start  lg:flex-row lg:justify-around">
                        <div>
                            <ul className="flex lg:justify-around">
                                <li>
                                    <img src="./icon/facebook.svg" alt="icon facebook" className="w-7 md:w-10 inline-block cursor-pointer"/>
                                </li>
                                <li>
                                    <img src="./icon/instagram.svg" alt="icon instagram" className="w-7 md:w-10 inline-block mx-6 cursor-pointer"/>
                                </li>
                                <li>
                                    <img src="./icon/twitter.svg" alt="icon twitter" className="w-7 md:w-10 inline-block cursor-pointer"/>
                                </li>
                            </ul>
                        </div>
                        <div className="grid justify-end items-end lg:m-0 my-5">
                            <ul className="flex flex-col md:flex-row m-0 md:mx-14 justify-center items-center">
                                <li className="cursor-pointer">
                                    <img className="w-32 mx-5"src="./logo/playstore.png" alt="logo play store"/>
                                </li>
                                <li className="cursor-pointe md:m-0 my-3">
                                    <img className="w-32 mx-5"src="./logo/appstore.png" alt="logo app store"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer